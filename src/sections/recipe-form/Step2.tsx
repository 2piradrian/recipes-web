import Titles from "../../components/titles/Titles";
import DynamicIngredients from "../../components/dynamic-ingredients/DynamicIngredients";
import { toast, Toaster } from "react-hot-toast";
import { ingredient } from "../../types/types";
import "../../styles/forms.css";

type Props = {
	handleStep: (number: number) => void;
	dataStep: (data: any) => void;
	style: Object;
};

function Step2({ handleStep, style }: Props) {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		/* este código me hizo sufrir mucho */
		const formData = new FormData(e.currentTarget).entries();
		const inputs = Array.from(formData);
		/* Cada elemento del nuevo array será un objeto con propiedades "cant", "unit" y "name" */
		/* TODO: Verificar por qué no acepta el tipo Array<ingredient> */
		const ingredientArray: any = inputs.reduce(
			(acc: { [index: number]: any }, [name, value]) => {
				/* extrae el numero de input, un slice no funcionó para index > 9 */
				const index = parseInt(name.match(/\d+/)?.[0] || "0");
				/* crea el objeto */
				if (!acc[index]) {
					acc[index] = { cant: "", unit: "", name: "" };
				}
				/* Asignar el valor */
				if (name.startsWith("cant")) {
					acc[index].cant = value;
				} else if (name.startsWith("unit")) {
					acc[index].unit = value;
				} else if (name.startsWith("name")) {
					acc[index].name = value;
				}
				return acc;
			},
			[]
		);
		const hasEmptyValue = ingredientArray.some((ingredient: ingredient) =>
			Object.values(ingredient).some((value) => value === "")
		);

		if (hasEmptyValue) {
			console.log(1);
			toast.error("No pueden quedar campos vacíos");
		} else {
			/* guardar el estado */
		}
	};

	return (
		<form className="form" onSubmit={(e) => handleSubmit(e)} style={style}>
			<Titles title="Colaborá con recetas" subtitle="ahora los ingredientes" />
			<DynamicIngredients />
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
		</form>
	);
}

export default Step2;
