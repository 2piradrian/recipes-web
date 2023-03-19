import { useEffect } from "react";
import { useSelector } from "react-redux";
import RecipeCard from "../components/recipe-card/RecipeCard";
import SearchBar from "../components/search-bar/SearchBar";
import useScroll from "../hooks/useScroll";

function Explore() {
	const { recipes, handleScroll } = useScroll();
	const filterData = useSelector((state: any) => state.filterData);

	useEffect(() => {
		handleScroll();
	}, [filterData]);

	return (
		<div className="bigcontainer">
			<SearchBar />
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
				{recipes.map((recipe) => (
					<RecipeCard key={recipe.id} {...recipe} />
				))}
			</div>
		</div>
	);
}

export default Explore;
