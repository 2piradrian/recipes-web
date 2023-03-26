import { useEffect, useState } from "react";
import { recipe } from "../../types/types";
import useRecipes from "../../hooks/useRecipes";
import style from "./style.module.css";
import RecipeCard from "../../components/recipe-card/RecipeCard";
import Loader from "../../components/loader/Loader";

function MyRecipesView() {
	const [userRecipes, setUserRecipes] = useState<Array<recipe>>([]);
	const { getListOfRecipes } = useRecipes();

	useEffect(() => {
		const getAyncFavourites = async () => {
			const recipes = await getListOfRecipes(true);
			setUserRecipes(recipes);
		};
		getAyncFavourites();
	}, []);

	return (
		<div className={style.container}>
			{userRecipes ? (
				userRecipes.map((fav) => <RecipeCard key={fav.id} {...fav} />)
			) : (
				<Loader />
			)}
		</div>
	);
}

export default MyRecipesView;
