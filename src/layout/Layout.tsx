import React from "react";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { get_user_data } from "../redux/actions/actions";

type Props = {
	children: React.ReactNode;
};

function Layout({ children }: Props) {
	const dispatch = useDispatch();
	useEffect(() => {
		/* si el usuario está loggeado necesitamos traer su información para utilizarla en la app */
		const unregisterAuthObserver = getAuth().onAuthStateChanged(function (user) {
			if (user) {
				dispatch(get_user_data(user.email || ""));
			}
		});
		return () => unregisterAuthObserver();
	}, []);

	return (
		<>
			<Header />
			<Sidebar />
			<main>{children}</main>
		</>
	);
}

export default Layout;
