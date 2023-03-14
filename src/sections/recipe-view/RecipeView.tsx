import { recipe } from "../../types/types";
import style from "./style.module.css";

type Props = {
	recipe: recipe;
};

function RecipeView({ recipe }: Props) {
	return (
		<div className={style.container}>
			<h1 className={style.name}>{recipe?.name}</h1>
		</div>
	);
}

export default RecipeView;
