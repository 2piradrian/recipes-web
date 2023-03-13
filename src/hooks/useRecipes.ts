import { recipe } from "./../types/types";
import { db } from "./../firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function useRecipes() {
	const dispatch = useDispatch();
	const userData = useSelector((state: any) => state.userData);

	const recipesCollection = collection(db, "recipes");

	const uploadRecipe = async (recipe: recipe) => {
		console.log(recipe);
		const docRef = await addDoc(recipesCollection, recipe);
		/* agregar al documento usuario que esta receta le pertenece */
		setDoc(doc(recipesCollection, userData.email), [...userData.recipes, docRef.id]);
	};

	return { uploadRecipe };
}

export default useRecipes;
