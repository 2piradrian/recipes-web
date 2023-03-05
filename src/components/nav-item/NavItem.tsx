import style from "./style.module.css";

type Props = {
	icon: JSX.Element;
	state: boolean;
	name: string;
};

function NavItem({ state, icon, name }: Props) {
	return (
		<div className={style.route}>
			<div className={style.icon}>{icon}</div>
			<p style={state ? { opacity: "1", width: "auto" } : { opacity: "0", width: "0px" }}>
				{name}
			</p>
		</div>
	);
}

export default NavItem;
