import { useEffect, useState } from "react";
import { recipe } from "../types/types";
import useRecipes from "./useRecipes";

function useScroll() {
	const { getLazyRecipes } = useRecipes();
	const [recipes, setRecipes] = useState<Array<recipe>>([]);

	const handleScroll = async () => {
		const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
		if (scrollTop + clientHeight >= scrollHeight - 1) {
			const recipesList = await getLazyRecipes();
			setRecipes(recipes.concat(...recipesList));
			/* window.scrollTo(0, 0); */
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	return { recipes, handleScroll };
}

export default useScroll;
