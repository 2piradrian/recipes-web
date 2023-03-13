import { recipe } from "./../types/types";
import { db } from "./../firebase";
import { addDoc, collection } from "firebase/firestore";
function useRecipes() {
	const recipesCollection = collection(db, "recipes");

	const uploadRecipe = async (recipe: recipe) => {
		console.log(recipe);
		const docRef = await addDoc(recipesCollection, recipe);
		/* agregar al documento usuario que esta receta le pertenece */
		console.log(docRef.id);
	};

	return { uploadRecipe };
}

export default useRecipes;
