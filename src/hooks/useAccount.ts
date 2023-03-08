import { get_user_data, set_user_data } from "./../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { auth, db } from "../firebase";
import { useDispatch } from "react-redux";

function useAccount() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	/* colección de recetas */
	const recipesCollection = collection(db, "recipes");

	/* crea una cuenta sin tener que exponer el auth */
	const createAccountWithEmail = (email: string, password: string) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const userInfo = { email: email, uid: userCredential.user.uid };
				logInWithEmail(email, password);
				dispatch(set_user_data(userInfo));
				dispatch(get_user_data(email));
				toast("Usuario creado con éxito 👌");
			})
			.catch(() => {
				toast("Es probable que esa cuenta ya exista 😡");
				toast("Algo salió mal 😢");
			});
	};

	/* ingresa a la cuenta sin tener que exponer el auth */
	const logInWithEmail = (email: string, password: string) => {
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				dispatch(get_user_data(email));
				navigate("/usuario");
			})
			.catch(() => {
				toast("Algo salió mal 😢");
			});
	};

	return { createAccountWithEmail, logInWithEmail };
}

export default useAccount;
