import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

import RegisterForm from "../sections/register-form/RegisterForm";

function Register() {
	const { auth } = useContext(AuthContext);

	if (auth) {
		return <Navigate to="/user" replace />;
	}

	return <RegisterForm />;
}

export default Register;
