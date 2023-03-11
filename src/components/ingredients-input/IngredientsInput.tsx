import React from "react";
import { unit } from "../../data/data";
import FormSelector from "../form-selector/FormSelector";

type Props = {};

function IngredientsInput({}: Props) {
	return (
		<div className="arrowInputs">
			<div className="columnInputs">
				<input placeholder="Cant." />
			</div>
			<div className="columnInputs">
				<input placeholder="Azúcar" />
			</div>
			<div className="columnInputs">
				<FormSelector data={unit} label="Unidad" name="Unidad" />
			</div>
		</div>
	);
}

export default IngredientsInput;
