import { Formik, Form, Field, ErrorMessage } from "formik";
import Titles from "../../components/titles/Titles";
import useVerification from "../../hooks/useVerification";

import "../../styles/forms.css";

type Props = {
	handleStep: (number: number) => void;
	dataStep: (data: any) => void;
	data: any;
	style: Object;
};

function Step2({ handleStep, dataStep, data, style }: Props) {
	const { DescriptionSchema } = useVerification();
	return (
		<Formik
			initialValues={{ ...data }}
			validationSchema={DescriptionSchema}
			enableReinitialize
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
