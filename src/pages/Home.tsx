import { useEffect, useState } from "react";
import useRecipes from "../hooks/useRecipes";
import Welcome from "../sections/welcome/Welcome";

function Home() {
	const { getPrincipalRecipes } = useRecipes();
	const [recipes, setRecipes] = useState({
		last3: [],
		recommended: [],
		following: [],
	});

	useEffect(() => {
		const fetchRecipes = async () => {
			/* TODO: Arreglar este tipo any */
			const recipes: any = await getPrincipalRecipes();
			setRecipes(recipes);
		};
		fetchRecipes();
	}, [getPrincipalRecipes]);

	return <Welcome recipes={recipes} />;
}

export default Home;
