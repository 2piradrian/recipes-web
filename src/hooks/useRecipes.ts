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
	const userData = useSelector((state: any) => state.userData);

	const recipesCollection = collection(db, "recipes");
	const usersCollection = collection(db, "users");

	/* añade la receta a la colección de recetas públicas */
	const uploadRecipe = async (recipe: recipe) => {
		console.log("uploadRecipe", recipe);
		const docRef = await addDoc(recipesCollection, recipe);
		console.log("documento subido");
		/* agregar al documento usuario que esta receta le pertenece */
		console.log("id documento", docRef.id);
		updateDoc(doc(usersCollection, userData.email), {
			recipes: [...userData.recipes, docRef.id],
		});
		console.log("documento añadido");
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
		return docSnap.data();
	};

	return { uploadRecipe, getPrincipalRecipes, getRecipe };
}

export default useRecipes;
