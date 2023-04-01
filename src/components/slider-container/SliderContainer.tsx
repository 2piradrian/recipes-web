import style from "./style.module.css";
import { recipe } from "../../types/types";
import RecipeCard from "../recipe-card/RecipeCard";
import { useNavigate } from "react-router-dom";

type Props = {
	recipes: Array<recipe>;
};

function SliderContainer({ recipes }: Props) {
	const navigate = useNavigate();

	return (
		<div className={style.container}>
			{recipes ? (
				recipes.length >= 1 ? (
					recipes.map((recipe: recipe) => <RecipeCard key={recipe.id!} {...recipe} />)
				) : (
					/* deberia llegar un array vacío */
					<div className={style.alertContainer}>
						<div className={style.alert}>
							<p>Vaya, aún no has configurado tus gustos.</p>
							<button onClick={() => navigate("/user")}>Configurar</button>
						</div>
					</div>
				)
			) : (
				/* deberia llegar undefined */
				<div className={style.alertContainer}>
					<div className={style.alert}>
						<p>
							Vaya, aún no has iniciado sesion. Hazlo para tener acceso a todos los
							beneficios.
						</p>
						<button>Iniciar sesión</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default SliderContainer;
