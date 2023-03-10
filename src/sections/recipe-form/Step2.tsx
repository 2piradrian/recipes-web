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

function Step2({ handleStep, dataStep, style }: Props) {
	const { DescriptionSchema } = useVerification();

	return (
		<Formik
			initialValues={{
				title: "",
				category: "",
				estimatedTime: "",
				unit: "",
				imageUrl: "",
			}}
			validationSchema={DescriptionSchema}
			onSubmit={(values) => {
				dataStep(values);
				handleStep(1);
			}}>
			{() => (
				<Form className="form" style={style}>
					<Titles title="Colaborá con recetas" subtitle="creemos una nueva receta 👨‍🍳" />
					<div className="columnInputs">
						<label>Descripción</label>
						<Field
							component="textarea"
							placeholder="Pollo al disco"
							name="description"
						/>
						<ErrorMessage name="description" component="small" />
					</div>
					<div className="columnInputs">
						<label>URL de la Imagen</label>
						<Field type="text" placeholder="https://..." name="imageUrl" />
						<ErrorMessage name="imageUrl" component="small" />
					</div>
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
				</Form>
			)}
		</Formik>
	);
}

export default Step2;
