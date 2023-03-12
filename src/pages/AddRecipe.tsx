import { useState, useEffect } from "react";

import Step1 from "../sections/recipe-form/Step1";
import Step2 from "../sections/recipe-form/Step2";
import Step3 from "../sections/recipe-form/Step3";
import { ingredient } from "../types/types";

type Step1 = {
	title: string;
	category: string;
	time: string;
	image: string;
};

type Step2 = {
	ingredients: Array<ingredient>;
};

type Step3 = {
	steps: Array<string>;
};

function AddRecipe() {
	const [formStep, setFormStep] = useState(3);

	const [dataStep1, setDataStep1] = useState<Step1 | null>();
	const [dataStep2, setDataStep2] = useState<Step2 | null>();
	const [dataStep3, setDataStep3] = useState<Step3 | null>();

	const handleStep = (number: number) => {
		setFormStep(formStep + number);
	};

	useEffect(() => {});

	const renderStep = () => {
		switch (formStep) {
			case 1:
				return <Step1 handleStep={handleStep} dataStep={setDataStep1} />;
			case 2:
				return <Step2 handleStep={handleStep} dataStep={setDataStep2} />;
			case 3:
				return <Step3 handleStep={handleStep} dataStep={setDataStep3} />;
		}
	};

	return <section className="bigcontainer">{renderStep()}</section>;
}

export default AddRecipe;
