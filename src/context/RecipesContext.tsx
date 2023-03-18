import { getDocs, startAfter } from "firebase/firestore";
import { orderBy } from "firebase/firestore";
import { limit } from "firebase/firestore";
import { query } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebase";
import { recipe } from "../types/types";
import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

type RecipeContextType = {
	recipes: Array<recipe>;
	handleScroll: () => Promise<void>;
};

type RecipeProviderProps = {
	children: React.ReactNode;
};

const RecipeContext = createContext<RecipeContextType>({
	recipes: [],
	handleScroll: async () => {},
});

const RecipeProvider = ({ children }: RecipeProviderProps) => {
	const [lastRecipe, setLastRecipe] = useState<recipe | boolean>(true);
	const [recipes, setRecipes] = useState<Array<recipe>>([]);

	const filterData = useSelector((state: any) => state.filterData);
	const recipesCollection = collection(db, "recipes");

	const handleScroll = async () => {
		const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
		if (scrollTop + clientHeight >= scrollHeight - 175) {
			const recipesList = await getLazyRecipes();
			setRecipes(recipes.concat(...recipesList));
		}
	};

	const lazyRecipes = async () => {
		if (!lastRecipe) return { list: [], lastDoc: false };

		const q = query(
			recipesCollection,
			filterData,
			limit(5),
			orderBy("description"),
			startAfter(lastRecipe)
		);

		const recipesOfTheStep = await getDocs(q).then((snapshot) => {
			const arrayOfRecipes: any = [];
			const arrayOfLastRecipes: any = [];
			snapshot.docs.map((doc) => {
				const recipeDoc = { id: doc.id, ...doc.data() } as recipe;
				arrayOfRecipes.push(recipeDoc);
				arrayOfLastRecipes.push(doc);
			});
			return {
				list: arrayOfRecipes,
				lastDoc: arrayOfLastRecipes[arrayOfLastRecipes.length - 1],
			};
		});
		return recipesOfTheStep;
	};

	const getLazyRecipes = async () => {
		const recipesOfTheStep = await lazyRecipes();
		setLastRecipe(recipesOfTheStep.lastDoc);
		return recipesOfTheStep.list;
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	return (
		<RecipeContext.Provider value={{ recipes, handleScroll }}>
			{children}
		</RecipeContext.Provider>
	);
};

export { RecipeContext, RecipeProvider };
