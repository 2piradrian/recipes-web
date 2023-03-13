import { unit } from "../../data/data";
import FormSelector from "../form-selector/FormSelector";

type Props = {
	id: number;
};

function IngredientsInput({ id }: Props) {
	return (
		<div className="arrowInputs">
			<div className="columnInputs" style={{ width: "180px" }}>
				<input placeholder="Cant." name={`cant${id}`} />
			</div>
			<div className="columnInputs">
				<select name={`unit${id}`}>
					<FormSelector data={unit} label="Unidad" />
				</select>
			</div>
			<div className="columnInputs">
				<input placeholder="Azúcar" name={`name${id}`} />
			</div>
		</div>
	);
}

export default IngredientsInput;
