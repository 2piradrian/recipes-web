import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRecipes from "../hooks/useRecipes";
import { recipe } from "../types/types";

function Recipe() {
	const { id } = useParams();
	const { getRecipe } = useRecipes();
	const [request, setRequest] = useState<recipe | null | undefined>();

	useEffect(() => {
		console.log(id);
		const fetchRecipe = async () => {
			const recipe = await getRecipe(id!);
			setRequest(recipe as recipe);
		};
		fetchRecipe();
	}, []);
	return <div>{request?.authorname}</div>;
}

export default Recipe;
