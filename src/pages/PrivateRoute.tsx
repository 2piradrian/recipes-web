import { Navigate, Route, Routes } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

type PrivateRouteProps = {
	element: React.ReactNode;
	path: string;
};

function PrivateRoute({ element, path }: PrivateRouteProps) {
	const [authState, setAuthState] = useState({
		isSignedIn: false,
		pending: true,
	});

	useEffect(() => {
		const unregisterAuthObserver = getAuth().onAuthStateChanged(function (user) {
			setAuthState({ pending: false, isSignedIn: !!user });
		});
		return () => unregisterAuthObserver();
	}, []);

	if (authState.pending) {
		return null;
	} else {
		if (authState.isSignedIn) {
			return (
				<Routes>
					<Route path={path} element={element} />
				</Routes>
			);
		} else {
			return <Navigate to="/login" />;
		}
	}
}

export default PrivateRoute;
