import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LoginForm from "../sections/login-form/LoginForm";

function Login() {
	const navigate = useNavigate();
	useEffect(() => {
		getAuth().onAuthStateChanged(function (user) {
			if (user) {
				navigate("/usuario");
			}
		});
	}, []);

	return <LoginForm />;
}

export default Login;
