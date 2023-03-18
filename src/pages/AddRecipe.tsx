import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
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

function AddRecipe() {
	const { uploadRecipe } = useRecipes();
	const [formStep, setFormStep] = useState(1);
	const { getUserDataAsync } = useContext(AuthContext);
	const userData = useSelector((state: any) => state.userData);

	const [dataStep1, setDataStep1] = useState<Step1 | null>();
	const [dataStep2, setDataStep2] = useState<Step2 | null>();
	const [dataStep3, setDataStep3] = useState<Array<ingredient> | null>();
	const [dataStep4, setDataStep4] = useState<Array<string> | null>();

	const author = useSelector((state: any) => state.userData);

	useEffect(() => {
		if (formStep === 5) {
			/* actualizar la lista de ids de recetas */
			getUserDataAsync(userData.email);
			const { title, category, estimatedTime, unit } = dataStep1!;
			const { imageUrl, description } = dataStep2!;
			const recipe: recipe = {
				description: description,
				name: title,
				category: category,
				time: `${estimatedTime} ${unit}`,
				image: imageUrl,
				ingredients: dataStep3!,
				steps: dataStep4!,
				comments: [],
				authorname: `${author.name} ${author.surname}`,
				authoruid: author.uid,
				authorphoto: author.image,
			};
			uploadRecipe(recipe);
			toast.success("Receta creada exitosamente");
		}
	}, [dataStep1, dataStep2, dataStep3, dataStep4]);

	const isEnabled = (number: number) => {
		return { display: number === formStep ? "block" : "none" };
	};

	const handleStep = (number: number) => {
		setFormStep(formStep + number);
	};

	return (
		<section className="bigcontainer">
			<Step1 handleStep={handleStep} dataStep={setDataStep1} style={isEnabled(1)} />
			<Step2 handleStep={handleStep} dataStep={setDataStep2} style={isEnabled(2)} />
			<Step3 handleStep={handleStep} dataStep={setDataStep3} style={isEnabled(3)} />
			<Step4 handleStep={handleStep} dataStep={setDataStep4} style={isEnabled(4)} />
		</section>
	);
}

export default AddRecipe;
