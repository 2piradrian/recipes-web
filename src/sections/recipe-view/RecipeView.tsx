import { recipe } from "../../types/types";
import style from "./style.module.css";

type Props = {
	recipe: recipe;
};

function RecipeView({ recipe }: Props) {
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
		</div>
	);
}

export default RecipeView;
