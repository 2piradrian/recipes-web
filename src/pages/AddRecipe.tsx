import { useState, useEffect } from "react";

import Step1 from "../sections/recipe-form/Step1";
import Step2 from "../sections/recipe-form/Step2";
import Step3 from "../sections/recipe-form/Step3";

function AddRecipe() {
	const [formStep, setFormStep] = useState(3);

	const handleStep = (number: number) => {
		setFormStep(formStep + number);
	};

	useEffect(() => {});

	const renderStep = () => {
		switch (formStep) {
			case 1:
				return <Step1 handleStep={handleStep} />;
			case 2:
				return <Step2 handleStep={handleStep} />;
			case 3:
				return <Step3 handleStep={handleStep} />;
		}
	};

	return <section className="bigcontainer">{renderStep()}</section>;
}

export default AddRecipe;
