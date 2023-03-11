import React, { useState } from "react";
import FormSelector from "../../components/form-selector/FormSelector";
import IngredientsInput from "../../components/ingredients-input/IngredientsInput";
import Titles from "../../components/titles/Titles";
import { categories, time } from "../../data/data";

import "../../styles/forms.css";

type Props = {
	handleStep: (number: number) => void;
};

function Step2({ handleStep }: Props) {
	return (
		<>
			<div className="columnInputs">
				<label>Ingredientes</label>
				<IngredientsInput />
			</div>
			<div className="columnInputs">
				<label>Categoria</label>
				<FormSelector data={categories} label="Categorias" name="category" />
				<small>{}</small>
			</div>
			<div className="arrowInputs">
				<div className="columnInputs">
					<label>Tiempo estimado</label>
					<input type="number" placeholder="20" name="username" />
					<small>{}</small>
				</div>
				<div className="columnInputs">
					<label>Unidad</label>
					<FormSelector data={time} label="Unidad" name="unit" />
					<small>{}</small>
				</div>
			</div>
			<div className="columnInputs">
				<label>URL de la Imagen</label>
				<input type="text" placeholder="https://..." name="title" />
				<small>{}</small>
			</div>
			<div className="arrowInputs">
				<div className="columnInputs">
					<button
						type="button"
						onClick={() => {
							handleStep(-1);
						}}>
						Atrás
					</button>
				</div>
				<div className="columnInputs">
					<button
						type="button"
						onClick={() => {
							handleStep(1);
						}}>
						Siguiente
					</button>
				</div>
			</div>
		</>
	);
}

export default Step2;
