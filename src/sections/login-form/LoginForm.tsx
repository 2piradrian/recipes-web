import React, { useState } from "react";
import { Link } from "react-router-dom";
import Titles from "../../components/titles/Titles";
import style from "./style.module.css";

function LoginForm() {
	const [emailE, setEmailE] = useState("");
	const [passwordE, setPasswordE] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const email = e.currentTarget.email.value;
		const password = e.currentTarget.password.value;

		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			setEmailE("Email no es válido");
			return;
		}
		setEmailE("");
		if (password.length < 6) {
			setPasswordE("Contraseña debe tener al menos 6 caracteres");
			return;
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
