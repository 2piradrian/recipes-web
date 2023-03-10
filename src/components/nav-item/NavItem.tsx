import { NavLink } from "react-router-dom";
import style from "./style.module.css";

type Props = {
	icon: JSX.Element;
	state: boolean;
	name: string;
	route: string;
};

function NavItem({ state, icon, name, route }: Props) {
	const activeStyle = {
		background: "white",
		marginLeft: "15px",
	};

	return (
		<NavLink
			className={style.route}
			to={route}
			style={({ isActive }) => (isActive && route !== "/user" ? activeStyle : undefined)}>
			<div className={style.icon}>{icon}</div>
			<p style={state ? { opacity: "1", width: "auto" } : { opacity: "0", width: "0px" }}>
				{name}
			</p>
		</NavLink>
	);
}

export default NavItem;
