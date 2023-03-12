import React from "react";
import { Toaster } from "react-hot-toast";
import DynamicSteps from "../../components/dynamic-steps/DynamicSteps";
import Titles from "../../components/titles/Titles";

type Props = {
	handleStep: (number: number) => void;
};

function Step3({ handleStep }: Props) {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

	return (
		<form className="form" onSubmit={(e) => handleSubmit(e)}>
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

export default Step3;
