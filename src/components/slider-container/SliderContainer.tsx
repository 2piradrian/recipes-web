import style from "./style.module.css";
import { recipe } from "../../types/types";
import RecipeCard from "../recipe-card/RecipeCard";

type Props = {
	recipes: Array<recipe>;
};

function SliderContainer({ recipes }: Props) {
	return (
		<div className={style.container}>
			{recipes.map((recipe: recipe) => (
				<RecipeCard key={recipe.id!} {...recipe} />
			))}
		</div>
	);
}

export default SliderContainer;
