import React from "react";
import { toast, Toaster } from "react-hot-toast";
import DynamicSteps from "../../components/dynamic-steps/DynamicSteps";
import Titles from "../../components/titles/Titles";

type Props = {
	handleStep: (number: number) => void;
	dataStep: (data: any) => void;
	style: Object;
};

function Step4({ handleStep, dataStep, style }: Props) {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget).entries();
		const inputs = Array.from(formData);
		const stepArray: any = inputs.reduce((acc: { [index: number]: any }, [name, value]) => {
			const index = parseInt(name.match(/\d+/)?.[0] || "0");
			if (!acc[index]) {
				acc[index] = [];
			}
			acc[index] = value;
			return acc;
		}, []);
		const hasEmptyValue = stepArray.some((step: string) => step === "");

		if (hasEmptyValue) {
			toast.error("No pueden quedar campos vacíos");
		} else {
			dataStep(stepArray);
			handleStep(1);
		}
	};

	return (
		<form className="form" onSubmit={(e) => handleSubmit(e)} style={style}>
			<Titles title="Colaborá con recetas" subtitle="por último, el paso a paso" />
			<DynamicSteps />
			<div className="arrowInputs">
				<button
					type="button"
					onClick={() => {
						handleStep(-1);
					}}>
					Atrás
				</button>
				<button type="submit">Siguiente</button>
			</div>
			<Toaster position="top-right" />
		</form>
	);
}

export default Step4;
