import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import RecipeCard from "../components/recipe-card/RecipeCard";
import SearchBar from "../components/search-bar/SearchBar";
import { RecipeContext } from "../context/RecipesContext";
import useScroll from "../hooks/useScroll";
import { filter_category, filter_name, no_filters } from "../redux/actions/actions";

function Explore() {
	/* const { recipes, handleScroll } = useScroll(); */
	const [filter, setFilter] = useState<string | null>("");

	const { recipes, handleScroll } = useContext(RecipeContext);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(filter ? filter_category(filter) : no_filters());
		handleScroll();
	}, [filter]);

	return (
		<div className="bigcontainer">
			<SearchBar setFilter={setFilter} />
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
