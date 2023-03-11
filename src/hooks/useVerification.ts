import * as Yup from "yup";

function useVerification() {
	const RegisterSchema = Yup.object().shape({
		email: Yup.string()
			.email("Correo electrónico inválido")
			.required("Este campo es requerido"),
		password: Yup.string()
			.min(8, "La contraseña debe tener al menos 8 caracteres")
			.required("Este campo es requerido"),
		repeatpass: Yup.string()
			.oneOf([Yup.ref("password")], "Las contraseñas deben coincidir")
			.required("Este campo es requerido"),
	});

	const SignInSchema = Yup.object().shape({
		email: Yup.string()
			.email("Correo electrónico inválido")
			.required("Este campo es requerido"),
		password: Yup.string()
			.min(8, "La contraseña debe tener al menos 8 caracteres")
			.required("Este campo es requerido"),
	});

	const UserSchema = Yup.object().shape({
		username: Yup.string().required("Este campo es requerido"),
		usersurname: Yup.string().required("Este campo es requerido"),
	});

	return { UserSchema, RegisterSchema, SignInSchema };
}

export default useVerification;
