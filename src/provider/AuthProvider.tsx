import { getAuth, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { db } from "../firebase";
import { get_user_data, set_local_data, set_user_data } from "../redux/actions/actions";
import { setUserData } from "../redux/utils/userdata";
import { fullUserData, partialUserData } from "../types/types";

type AuthContextType = {
	auth: User | null;
};

const initialAuth: User | null = null;

interface AuthProviderProps {
	children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType>({
	auth: initialAuth,
});

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [auth, setAuth] = useState<User | null>(initialAuth);
	const dispatch = useDispatch();

	/* se trae el documento del usuario y lo almacena en redux */
	const getUserDataAsync = async (email: string) => {
		try {
			const userData = await getUserData(email);
			dispatch(set_local_data(userData as fullUserData | partialUserData));
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};
	/* hace la consulta a firebase */
	const getUserData = async (email: string) => {
		const docSnap = await getDoc(doc(db, "users", email));
		return docSnap.data();
	};

	useEffect(() => {
		const unregisterAuthObserver = getAuth().onAuthStateChanged(function (user) {
			if (user) {
				setAuth(user);
				getUserDataAsync(user.email || "");
			} else {
				setAuth(null);
				dispatch(set_local_data(null));
			}
		});
		return () => unregisterAuthObserver();
	}, []);

	return <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
