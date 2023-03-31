import { update_user_data } from "../redux/actions/actions";
import { toast } from "react-hot-toast";
import { recipe } from "../types/types";
import { db } from "../firebase";
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
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

function useRecipes() {
	const dispatch = useDispatch();
	const recipesCollection = collection(db, "recipes");

	const userData = useSelector((state: any) => state.userData);

	/* añade la receta a la colección de recetas públicas */
	const uploadRecipe = async (recipe: recipe) => {
		const docRef = await addDoc(recipesCollection, recipe);
		/* agregar al documento usuario que esta receta le pertenece */
		dispatch(
			update_user_data({
				...userData,
				recipes: [...userData.recipes, docRef.id],
			})
		);
		toast.success("Receta subida exitosamente");
		return <Navigate to={`/recipe/${docRef.id}`} replace />;
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
	const getRecipeById = async (id: string) => {
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
		return <Navigate to={`/recipe/${id}`} replace />;
	};

	/* obtener las favoritas o las creadas por el usuario */
	const getListOfRecipes = async (type: boolean = false) => {
		const list = (type ? userData.recipes : userData.favourites) || [];
		const promises = list.map((id: string) => getRecipeById(id));
		const recipes = await Promise.all(promises);
		return recipes;
	};

	/* manejador de likes */
	const manageLike = async (id: string) => {
		if (!userData.favourites) {
			return toast.error("Esta acción es solo para usuarios registrados");
		}
		let updatedLikes;
		const likes = userData.favourites;

		if (likes.includes(id!)) {
			updatedLikes = likes.filter((like: string) => like !== id);
		} else {
			updatedLikes = [...likes, id!];
		}

		dispatch(
			update_user_data({
				...userData,
				favourites: updatedLikes,
			})
		);
	};

	return {
		uploadRecipe,
		getPrincipalRecipes,
		getRecipeById,
		updateRecipe,
		getListOfRecipes,
		manageLike,
	};
}

export default useRecipes;