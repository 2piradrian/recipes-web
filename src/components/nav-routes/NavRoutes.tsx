import NavItem from "../nav-item/NavItem";
import style from "./style.module.css";
/* asstes */
import { AiFillHome } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import nouser from "../../assets/nouser.jpg";

type Props = {
	state: boolean;
};

function NavRoutes({ state }: Props) {
	return (
		<>
			<div className={style.routes}>
				<NavItem icon={<AiFillHome />} name="Home" route="/home" state={state} />
				<NavItem icon={<FaSearch />} name="Explorar" route="/explore" state={state} />
				<NavItem icon={<MdFavorite />} name="Favoritos" route="/favourites" state={state} />
				<NavItem icon={<FaBook />} name="Recetario" route="/myrecipes" state={state} />
			</div>
			<div className={style.user}>
				<NavItem
					icon={<img src={nouser} alt="profile photo" className={style.userimg} />}
					name="Perfil"
					route="/user"
					state={state}
				/>
			</div>
		</>
	);
}

export default NavRoutes;
