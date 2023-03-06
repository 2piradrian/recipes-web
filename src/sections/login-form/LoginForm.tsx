import React, { useState } from "react";
import { Link } from "react-router-dom";
import Titles from "../../components/titles/Titles";
import useAccount from "../../hooks/useAccount";
import useVerification from "../../hooks/useVerification";
import style from "./style.module.css";

function LoginForm() {
	const { logInWithEmail } = useAccount();
	const { verifyLogin } = useVerification();
	/* mensaje de error */
	const [emailE, setEmailE] = useState("");
	const [passwordE, setPasswordE] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const email = e.currentTarget.email.value;
		const password = e.currentTarget.password.value;

		if (verifyLogin(e, setEmailE, setPasswordE)) {
			logInWithEmail(email, password);
		}
	};

	return (
		<section className={"bigcontainer"}>
			<Titles title="Hola de nuevo" subtitle="ingresá acá 👇" />
			<form className={style.form} onSubmit={(e) => handleSubmit(e)}>
				<div className={style.columnInputs}>
					<label>Correo electrónico</label>
					<input type="email" placeholder="example@email.com" name="email" />
					<small>{emailE}</small>
				</div>
				<div className={style.columnInputs}>
					<label>Contraseña</label>
					<input type="password" placeholder="* * * * * * * * * *" name="password" />
					<small>{passwordE}</small>
				</div>
				<button>Ingresar</button>
			</form>
			<Link to="/register">Aún no tengo una cuenta 😔</Link>
		</section>
	);
}

export default LoginForm;
