import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { auth, db } from "../firebase";

function useAccount() {
	const navigate = useNavigate();
	/* colección de usuarios */
	const usersCollection = collection(db, "users");
	/* colección de recetas */
	const recipesCollection = collection(db, "recipes");

	/* crea una cuenta sin tener que exponer el auth */
	const createAccountWithEmail = (email: string, password: string) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const userInfo = { email: userCredential.user.email, uid: userCredential.user.uid };
				logInWithEmail(email, password);
				setUserInfo(userInfo);
				toast("Usuario creado con éxito 👌");
			})
			.catch((error) => {
				console.log(error);
				toast("Es probable que esa cuenta ya exista 😡");
				toast("Algo salió mal 😢");
			});
	};

	/* crea el documento con información del usuario  */
	// TODO: cambiar tipo any por información parcial y completa
	const setUserInfo = (userInfo: any) => {
		setDoc(doc(usersCollection, userInfo.email), userInfo);
	};

	/* ingresa a la cuenta sin tener que exponer el auth */
	const logInWithEmail = (email: string, password: string) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				navigate("/usuario");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return { createAccountWithEmail, setUserInfo, logInWithEmail };
}

export default useAccount;
