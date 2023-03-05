import NavItem from "../nav-item/NavItem";
import style from "./style.module.css";
/* asstes */
import { AiFillHome } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BsFillSearchHeartFill } from "react-icons/bs";

type Props = {
	state: boolean;
};

function NavRoutes({ state }: Props) {
	return (
		<div className={style.routes}>
			<NavItem icon={<AiFillHome />} name="Home" state={state} />
			<NavItem icon={<BsFillSearchHeartFill />} name="Explorar" state={state} />
			<NavItem icon={<MdFavorite />} name="Favoritos" state={state} />
			<NavItem icon={<FaBook />} name="Recetario" state={state} />
		</div>
	);
}

export default NavRoutes;
