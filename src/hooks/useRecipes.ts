import { useEffect, useState } from "react";
import { recipe } from "./../types/types";
import { db } from "./../firebase";
import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	limit,
	orderBy,
	query,
	startAfter,
	updateDoc,
} from "firebase/firestore";
import { useSelector } from "react-redux";

function useRecipes() {
	const [lastRecipe, setLastRecipe] = useState<recipe | boolean>(true);

	const recipesCollection = collection(db, "recipes");
	const usersCollection = collection(db, "users");

	const userData = useSelector((state: any) => state.userData);
	const filterData = useSelector((state: any) => state.filterData);

	useEffect(() => {
		setLastRecipe(true);
	}, [filterData]);

	/* añade la receta a la colección de recetas públicas */
	const uploadRecipe = async (recipe: recipe) => {
		const docRef = await addDoc(recipesCollection, recipe);
		/* agregar al documento usuario que esta receta le pertenece */
		updateDoc(doc(usersCollection, userData.email), {
			recipes: [...userData.recipes, docRef.id],
		});
	};

	/* trae las recetas que se muestran en /home */
	const getPrincipalRecipes = async () => {
		const last3 = await getDocs(query(recipesCollection, limit(3))).then((snapshot) =>
			snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
		);
		/* TODO: traer las otras dos secciones */
		return {
			last3,
		};
	};

	/* trae una receta por id */
	const getRecipe = async (id: string) => {
		const docSnap = await getDoc(doc(db, "recipes", id));
		const recipe: recipe = {
			id: docSnap.id,
			...(docSnap.data() as recipe),
		};
		return recipe;
	};

	/* traer recetas de 10 en 10 */
	const lazyRecipes = async () => {
		/* si no hay mas recetas no sigas buscando */
		if (!lastRecipe) return { list: [], lastDoc: false };
		/* sino, ejecutá la query */
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

	return { uploadRecipe, getPrincipalRecipes, getRecipe, getLazyRecipes };
}

export default useRecipes;
