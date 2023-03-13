import { recipe } from "./../types/types";
import { db } from "./../firebase";
import { addDoc, collection, doc, getDocs, limit, query, updateDoc } from "firebase/firestore";
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

	const getPrincipalRecipes = async () => {
		const last3 = await getDocs(query(recipesCollection, limit(3))).then((snapshot) =>
			snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
		);

		return {
			last3,
		};
	};

	return { uploadRecipe, getPrincipalRecipes };
}

export default useRecipes;
