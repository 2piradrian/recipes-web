import FormSelector from "../../components/form-selector/FormSelector";
import Titles from "../../components/titles/Titles";
import { categories, time } from "../../data/data";

import "../../styles/forms.css";

type Props = {
	handleStep: (number: number) => void;
};

function Step1({ handleStep }: Props) {
	return (
		<form className="form">
			<Titles title="Colaborá con recetas" subtitle="creemos una nueva receta 👨‍🍳" />

			<div className="columnInputs">
				<label>Título</label>
				<input type="text" placeholder="Pollo al disco" name="title" />
			</div>
			<div className="columnInputs">
				<label>Categoria</label>
				<FormSelector data={categories} label="Categorias" name="category" />
			</div>
			<div className="arrowInputs">
				<div className="columnInputs">
					<label>Tiempo estimado</label>
					<input type="number" placeholder="20" name="username" />
				</div>
				<div className="columnInputs">
					<label>Unidad</label>
					<FormSelector data={time} label="Unidad" name="unit" />
				</div>
			</div>
			<div className="columnInputs">
				<label>URL de la Imagen</label>
				<input type="text" placeholder="https://..." name="title" />
			</div>
			<div className="columnInputs">
				<button type="button" onClick={() => handleStep(1)}>
					Siguiente
				</button>
			</div>
		</form>
	);
}

export default Step1;
