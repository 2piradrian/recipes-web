import { NavLink } from "react-router-dom";
import style from "./style.module.css";

type Props = {
	icon: JSX.Element;
	state: boolean;
	name: string;
};

function NavItem({ state, icon, name }: Props) {
	const activeStyle = {
		background: "white",
		marginLeft: "15px",
	};

	return (
		<NavLink
			className={style.route}
			to={`/${name.toLowerCase()}`}
			style={({ isActive }) => (isActive && name !== "Usuario" ? activeStyle : undefined)}>
			<div className={style.icon}>{icon}</div>
			<p style={state ? { opacity: "1", width: "auto" } : { opacity: "0", width: "0px" }}>
				{name}
			</p>
		</NavLink>
	);
}

export default NavItem;
