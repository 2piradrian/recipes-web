import { recipe } from "./../types/types";
import { db } from "./../firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useSelector } from "react-redux";

function useRecipes() {
	const userData = useSelector((state: any) => state.userData);

	const recipesCollection = collection(db, "recipes");
	const usersCollection = collection(db, "users");

	const uploadRecipe = async (recipe: recipe) => {
		const docRef = await addDoc(recipesCollection, recipe);
		/* agregar al documento usuario que esta receta le pertenece */
		updateDoc(doc(usersCollection, userData.email), {
			recipes: [...userData.recipes, docRef.id],
		});
	};

	return { uploadRecipe };
}

export default useRecipes;
