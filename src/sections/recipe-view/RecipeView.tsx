import { recipe } from "../../types/types";
import { useSelector } from "react-redux";
import { AiFillEdit } from "react-icons/ai";
import ActionButton from "../../components/action-button/ActionButton";
import style from "./style.module.css";

type Props = {
	recipe: recipe;
};

function RecipeView({ recipe }: Props) {
	const userData = useSelector((state: any) => state.userData);

	return (
		<div className={style.container}>
			<h1 className={style.name}>{recipe?.name}</h1>
			<img src={recipe.image} alt={recipe.name} className={style.image} />
			<h2>Tiempo estimado</h2>
			<p className={style.time}>{recipe.time}</p>
			<h2>Descripción</h2>
			<p className={style.description}>{recipe.description}</p>
			<h2>Ingredientes</h2>
			{recipe.ingredients.map((ingredient) => (
				<p className={style.ingredient}>
					{ingredient.cant} {`${ingredient.unit} de ${ingredient.name}`}
				</p>
			))}
			<h2>Paso a paso</h2>
			{/*TODO: Cambiar el p por una lista numerada*/}
			{recipe.steps.map((step, index) => (
				<p className={style.steps}>{`${index + 1}) ${step}`}</p>
			))}
			{userData.uid === recipe.authoruid ? (
				<ActionButton content={<AiFillEdit />} route={`/editor/${recipe.id}`} />
			) : null}
		</div>
	);
}

export default RecipeView;
