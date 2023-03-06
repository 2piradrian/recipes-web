import { useState } from "react";
import { Link } from "react-router-dom";
import Titles from "../../components/titles/Titles";
import style from "./style.module.css";

function RegisterForm() {
	const [emailE, setEmailE] = useState("");
	const [passwordE, setPasswordE] = useState("");
	const [repeatPassE, setRepeatE] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const email = e.currentTarget.email.value;
		const password = e.currentTarget.password.value;
		const repeatpass = e.currentTarget.repeatpass.value;

		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			setEmailE("Email no es válido");
			return;
		}
		setEmailE("");
		if (password.length < 6) {
			setPasswordE("Contraseña debe tener al menos 6 caracteres");
			return;
		}
		setPasswordE("");
		if (password !== repeatpass) {
			setRepeatE("Las contraseñas no coinciden");
			return;
		}
		setRepeatE("");
	};

	return (
		<section className={"bigcontainer"}>
			<Titles title="Sumate al equipo" subtitle="registrate acá 👇" />
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
				<div className={style.columnInputs}>
					<label>Repetir contraseña</label>
					<input type="password" placeholder="* * * * * * * * * *" name="repeatpass" />
					<small>{repeatPassE}</small>
				</div>
				<button>Registrar</button>
			</form>
			<Link to="/login">Ya tengo una cuenta 👨‍🍳</Link>
		</section>
	);
}

export default RegisterForm;
