import React from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

type Props = {
	children: React.ReactNode;
};

function Layout({ children }: Props) {
	return (
		<>
			<Header />
			<Sidebar />
			<main style={{ marginLeft: "50px" }}>{children}</main>
		</>
	);
}

export default Layout;
