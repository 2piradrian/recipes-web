import { getAuth, User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { get_user_data, set_user_data } from "../redux/actions/actions";

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

	useEffect(() => {
		const unregisterAuthObserver = getAuth().onAuthStateChanged(function (user) {
			if (user) {
				setAuth(user);
				dispatch(get_user_data(user.email || ""));
			} else {
				setAuth(null);
				dispatch(set_user_data(null));
			}
		});
		return () => unregisterAuthObserver();
	}, []);

	return <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
