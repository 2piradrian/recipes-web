import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import useVerification from "../../hooks/useVerification";
import "../../styles/forms.css";

type Props = {
	handleStep: (number: number) => void;
	dataStep: (data: any) => void;
};

function Step1({ handleStep, dataStep }: Props) {
	const { RegisterSchema } = useVerification();

	const handleSubmit = (values: any) => {
		handleStep(1);
		dataStep(values);
	};

	return (
		<>
			<Formik
				initialValues={{ email: "", password: "", repeatpass: "" }}
				validationSchema={RegisterSchema}
				onSubmit={handleSubmit}>
				{({ errors, touched }) => (
					<Form className="form">
						<div className="columnInputs">
							<label htmlFor="email">Correo electrónico</label>
							<Field
								type="email"
								id="email"
								name="email"
								placeholder="example@email.com"
							/>
							{errors.email && touched.email && (
								<small className="error">{errors.email}</small>
							)}
						</div>
						<div className="columnInputs">
							<label htmlFor="password">Contraseña</label>
							<Field
								type="password"
								id="password"
								name="password"
								placeholder="* * * * * * * * * *"
							/>
							{errors.password && touched.password && (
								<small className="error">{errors.password}</small>
							)}
						</div>
						<div className="columnInputs">
							<label htmlFor="repeatpass">Repetir contraseña</label>
							<Field
								type="password"
								id="repeatpass"
								name="repeatpass"
								placeholder="* * * * * * * * * *"
							/>
							{errors.repeatpass && touched.repeatpass && (
								<small className="error">{errors.repeatpass}</small>
							)}
						</div>
						<button type="submit">Siguiente</button>
					</Form>
				)}
			</Formik>
			<Link to="/login" className="link">
				Ya tengo una cuenta 👨‍🍳
			</Link>
			<Toaster />
		</>
	);
}

export default Step1;
