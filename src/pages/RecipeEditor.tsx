import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import useRecipes from "../hooks/useRecipes";
import { AuthContext } from "../provider/AuthProvider";
import Step1 from "../sections/recipe-form/Step1";
import Step2 from "../sections/recipe-form/Step2";
import Step3 from "../sections/recipe-form/Step3";
import Step4 from "../sections/recipe-form/Step4";
import { ingredient, recipe } from "../types/types";

type Step1 = {
	title: string;
	category: string;
	estimatedTime: string;
	unit: string;
};

type Step2 = {
	imageUrl: string;
	description: string;
};

function RecipeEditor() {
	/* TODO: MOVER LOGICA A CUSTOM HOOK */
	const { id } = useParams();
	const { uploadRecipe, getRecipe } = useRecipes();
	const { getUserDataAsync } = useContext(AuthContext);

	const [formStep, setFormStep] = useState(1);
	const [dataStep1, setDataStep1] = useState<Step1>({
		title: "",
		category: "",
		estimatedTime: "",
		unit: "",
	});
	const [dataStep2, setDataStep2] = useState<Step2>({
		imageUrl: "",
		description: "",
	});
	const [dataStep3, setDataStep3] = useState<Array<ingredient> | null>();
	const [dataStep4, setDataStep4] = useState<Array<string> | null>();

	const userData = useSelector((state: any) => state.userData);

	useEffect(() => {
		if (!id) return;
		const getRecipeByID = async () => {
			const recipe = await getRecipe(id);
			if (recipe!.authoruid !== userData.uid) return <Navigate to="/user" replace />;
			/* contruir la receta en los pasos */
			setDataStep1({
				title: recipe!.name,
				category: recipe!.category,
				estimatedTime: recipe!.time.split(" ")[0],
				unit: recipe!.time.split(" ")[1],
			});
			setDataStep2({
				imageUrl: recipe!.image,
				description: recipe!.description,
			});
			setDataStep3(recipe!.ingredients);
			setDataStep4(recipe!.steps);
		};
		getRecipeByID();
	}, []);

	useEffect(() => {
		if (formStep === 5) {
			/* actualizar la lista de ids de recetas */
			getUserDataAsync(userData.email);
			const recipe: recipe = buildRecipe();
			uploadRecipe(recipe);
			toast.success("Receta creada exitosamente");
		}
	}, [dataStep1, dataStep2, dataStep3, dataStep4]);

	const buildRecipe = () => {
		const { title, category, estimatedTime, unit } = dataStep1!;
		const { imageUrl, description } = dataStep2!;
		return {
			description: description,
			name: title,
			category: category,
			time: `${estimatedTime} ${unit}`,
			image: imageUrl,
			ingredients: dataStep3!,
			steps: dataStep4!,
			comments: [], // ojo no sobreescribir
			authorname: `${userData.name} ${userData.surname}`,
			authoruid: userData.uid,
			authorphoto: userData.image,
		};
	};

	const isEnabled = (number: number) => {
		return { display: number === formStep ? "block" : "none" };
	};

	const handleStep = (number: number) => {
		setFormStep(formStep + number);
	};

	return (
		<section className="bigcontainer">
			<Step1
				handleStep={handleStep}
				dataStep={setDataStep1}
				data={dataStep1}
				style={isEnabled(1)}
			/>
			<Step2
				handleStep={handleStep}
				dataStep={setDataStep2}
				data={dataStep2}
				style={isEnabled(2)}
			/>
			<Step3
				handleStep={handleStep}
				dataStep={setDataStep3}
				data={dataStep3}
				style={isEnabled(3)}
			/>
			<Step4
				handleStep={handleStep}
				dataStep={setDataStep4}
				data={dataStep4}
				style={isEnabled(4)}
			/>
		</section>
	);
}

export default RecipeEditor;
