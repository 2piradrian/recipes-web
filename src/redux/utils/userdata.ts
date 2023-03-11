import { fullUserData, partialUserData } from "./../../types/types";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

/* coleción de usuarios */
const usersCollection = collection(db, "users");

/* escribe un documento con información del usuario  */
export const setUserData = (userInfo: fullUserData | partialUserData) => {
	setDoc(doc(usersCollection, userInfo.email), userInfo);
};
