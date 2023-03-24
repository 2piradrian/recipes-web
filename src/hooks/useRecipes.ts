import { toast } from "react-hot-toast";
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
	query,
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
		}).then(() => toast.success("Receta subida exitosamente"));
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

	/* actualizar receta */
	const updateRecipe = async (recipe: recipe, id: string) => {
		updateDoc(doc(recipesCollection, id), recipe).then(() =>
			toast.success("Receta actualizada exitosamente")
		);
	};

	return { uploadRecipe, getPrincipalRecipes, getRecipe, updateRecipe };
}

export default useRecipes;
