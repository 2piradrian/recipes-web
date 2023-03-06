import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import Titles from "../../components/titles/Titles";
import useAccount from "../../hooks/useAccount";
import style from "./style.module.css";
import useVerification from "../../hooks/useVerification";

function RegisterForm() {
	const { verifyRegister } = useVerification();
	const { createAccountWithEmail } = useAccount();
	/* mensajes de error */
	const [emailE, setEmailE] = useState("");
	const [passwordE, setPasswordE] = useState("");
	const [repeatPassE, setRepeatE] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const email = e.currentTarget.email.value;
		const password = e.currentTarget.password.value;

		if (verifyRegister(e, setEmailE, setPasswordE, setRepeatE)) {
			createAccountWithEmail(email, password);
		}
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
			<Toaster />
		</section>
	);
}

export default RegisterForm;
