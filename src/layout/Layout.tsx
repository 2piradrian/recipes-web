import React from "react";
import Sidebar from "../components/sidebar/Sidebar";

type Props = {
	children: React.ReactNode;
};

function Layout({ children }: Props) {
	return (
		<>
			<Sidebar />
			<main>{children}</main>
		</>
	);
}

export default Layout;
