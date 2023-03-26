import { useState, useEffect } from "react";
import Loader from "../../components/loader/Loader";
import RecipeCard from "../../components/recipe-card/RecipeCard";
import useRecipes from "../../hooks/useRecipes";
import { recipe } from "../../types/types";
import style from "./style.module.css";

function FavouritesView() {
	const [favs, setFavs] = useState<Array<recipe>>([]);
	const { getFavourites } = useRecipes();

	useEffect(() => {
		const getAyncFavourites = async () => {
			const recipes = await getFavourites();
			setFavs(recipes);
		};
		getAyncFavourites();
	}, []);

	return (
		<div className={style.container}>
			{favs ? favs.map((fav) => <RecipeCard key={fav.id} {...fav} />) : <Loader />}
		</div>
	);
}

export default FavouritesView;
