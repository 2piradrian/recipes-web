import { Formik, Form, Field, ErrorMessage } from "formik";
import FormSelector from "../../components/form-selector/FormSelector";
import Titles from "../../components/titles/Titles";
import { categories, time } from "../../data/data";
import useVerification from "../../hooks/useVerification";

import "../../styles/forms.css";

type Props = {
	handleStep: (number: number) => void;
	dataStep: (data: any) => void;
	style: Object;
};

function Step1({ handleStep, dataStep, style }: Props) {
	const { RecipeSchema } = useVerification();

	return (
		<Formik
			initialValues={{
				title: "",
				category: "",
				estimatedTime: "",
				unit: "",
				imageUrl: "",
			}}
			validationSchema={RecipeSchema}
			onSubmit={(values) => {
				dataStep(values);
				handleStep(1);
			}}>
			{() => (
				<Form className="form" style={style}>
					<Titles title="Colaborá con recetas" subtitle="creemos una nueva receta 👨‍🍳" />
					<div className="columnInputs">
						<label>Título</label>
						<Field type="text" placeholder="Pollo al disco" name="title" />
						<ErrorMessage name="title" component="small" />
					</div>
					<div className="columnInputs">
						<label>Categoria</label>
						<Field as="select" name="category">
							<FormSelector data={categories} label="Categorias" />
						</Field>
						<ErrorMessage name="category" component="small" />
					</div>
					<div className="arrowInputs">
						<div className="columnInputs">
							<label>Tiempo estimado</label>
							<Field type="number" placeholder="20" name="estimatedTime" />
							<ErrorMessage name="estimatedTime" component="small" />
						</div>
						<div className="columnInputs">
							<label>Unidad</label>
							<Field as="select" name="unit">
								<FormSelector data={time} label="Unidad" />
							</Field>
							<ErrorMessage name="unit" component="small" />
						</div>
					</div>
					<div className="columnInputs">
						<label>URL de la Imagen</label>
						<Field type="text" placeholder="https://..." name="imageUrl" />
						<ErrorMessage name="imageUrl" component="small" />
					</div>
					<div className="columnInputs">
						<button type="submit">Siguiente</button>
					</div>
				</Form>
			)}
		</Formik>
	);
}

export default Step1;
