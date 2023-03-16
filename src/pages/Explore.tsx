import { useEffect } from "react";
import RecipeCard from "../components/recipe-card/RecipeCard";
import useRecipes from "../hooks/useRecipes";
import useScroll from "../hooks/useScroll";

function Explore() {
	const { recipes, handleScroll } = useScroll();

	useEffect(() => {
		handleScroll();
	}, []);
	return (
		<div className="bigcontainer">
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					gap: "20px",
					padding: "50px",
				}}>
				{recipes?.map((recipe) => (
					<RecipeCard key={recipe.id} {...recipe} />
				))}
			</div>
		</div>
	);
}

export default Explore;
