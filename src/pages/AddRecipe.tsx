import { useState, useEffect } from "react";

import Step1 from "../sections/recipe-form/Step1";
import Step2 from "../sections/recipe-form/Step2";

function AddRecipe() {
	const [formStep, setFormStep] = useState(1);

	const handleStep = (number: number) => {
		setFormStep(formStep + number);
	};

	useEffect(() => {});

	return (
		<section className="bigcontainer">
			{formStep === 1 ? <Step1 handleStep={handleStep} /> : <Step2 handleStep={handleStep} />}
		</section>
	);
}

export default AddRecipe;
