import { Link } from "react-router-dom";
import Titles from "../../components/titles/Titles";
import style from "./style.module.css";

function RegisterForm() {
	return (
		<div className={"bigcontainer"}>
			<Titles title="Sumate al equipo" subtitle="registrate acá 👇" />
			<form className={style.form}>
				<div className={style.columnInputs}>
					<label>Correo electrónico</label>
					<input type="email" placeholder="example@email.com" name="email" />
				</div>
				<div className={style.columnInputs}>
					<label>Contraseña</label>
					<input type="password" placeholder="* * * * * * * * * *" name="email" />
				</div>
				<div className={style.columnInputs}>
					<label>Repetir contraseña</label>
					<input type="password" placeholder="* * * * * * * * * *" name="email" />
				</div>
				<button>Registrar</button>
			</form>
			<Link to="/login">Ya tengo una cuenta 👨‍🍳</Link>
		</div>
	);
}

export default RegisterForm;
