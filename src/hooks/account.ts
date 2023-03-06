import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function useAccount() {
	const createAccountWithEmail = (email: string, password: string) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				return user;
			})
			.catch((error) => {
				return false;
			});
	};

	return { createAccountWithEmail };
}

export default useAccount;
