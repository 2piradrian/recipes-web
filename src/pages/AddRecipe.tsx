import { useState } from "react";
import Titles from "../components/titles/Titles";

import Step1 from "../sections/recipe-form/Step1";
import Step2 from "../sections/recipe-form/Step2";

function AddRecipe() {
	const [formStep, setFormStep] = useState(1);

	const handleStep = (number: number) => {
		setFormStep(formStep + number);
	};

	return (
		<section className="bigcontainer">
			<Titles title="Colaborá con recetas" subtitle="creemos una nueva receta 👨‍🍳" />
			<form className="form">
				{formStep === 1 ? (
					<Step1 handleStep={handleStep} />
				) : (
					<Step2 handleStep={handleStep} />
				)}
			</form>
		</section>
	);
}

export default AddRecipe;
