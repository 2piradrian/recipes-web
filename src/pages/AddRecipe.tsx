import { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import useRecipes from "../hooks/useRecipes";
import Step1 from "../sections/recipe-form/Step1";
import Step2 from "../sections/recipe-form/Step2";
import Step3 from "../sections/recipe-form/Step3";
import { ingredient, recipe } from "../types/types";

type Step1 = {
	title: string;
	category: string;
	estimatedTime: string;
	imageUrl: string;
	unit: string;
};

function AddRecipe() {
	const { uploadRecipe } = useRecipes();
	const [formStep, setFormStep] = useState(1);

	const [dataStep1, setDataStep1] = useState<Step1 | null>();
	const [dataStep2, setDataStep2] = useState<Array<ingredient> | null>();
	const [dataStep3, setDataStep3] = useState<Array<string> | null>();

	const author = useSelector((state: any) => state.userData);

	useEffect(() => {
		if (formStep === 4) {
			const { title, category, estimatedTime, imageUrl, unit } = dataStep1!;
			const recipe: recipe = {
				description: "",
				name: title,
				category: category,
				time: `${estimatedTime} ${unit}`,
				image: imageUrl,
				ingredients: dataStep2!,
				steps: dataStep3!,
				comments: [],
				author: `${author.name} ${author.surname}`,
			};
			uploadRecipe(recipe);
		}
	}, [dataStep1, dataStep2, dataStep3]);

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
		</section>
	);
}

export default AddRecipe;
