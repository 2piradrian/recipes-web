import { fullUserData, partialUserData } from "./../../types/types";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

/* coleción de usuarios */
const usersCollection = collection(db, "users");

/* escribe un documento con información del usuario  */
export const setUserData = (userInfo: fullUserData | partialUserData) => {
	setDoc(doc(usersCollection, userInfo.email), userInfo);
};
/* lee información del usuario */
export const getUserData = async (email: string) => {
	const docSnap = await (await getDoc(doc(db, "users", email))).data();
	console.log(docSnap);
	return docSnap;
};
