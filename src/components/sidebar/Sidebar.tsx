import { useState } from "react";
import style from "./style.module.css";
import NavRoutes from "../nav-routes/NavRoutes";
/* assets */
import nouser from "../../assets/nouser.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import NavItem from "../nav-item/NavItem";

function Sidebar() {
	const [state, setState] = useState<boolean>(false);

	return (
		<div className={style.container} style={{ width: `${state ? "180px" : "50px"}` }}>
			<nav className={style.sidebar}>
				{state ? (
					<AiOutlineClose onClick={() => setState(!state)} />
				) : (
					<RxHamburgerMenu onClick={() => setState(!state)} />
				)}
				<NavRoutes state={state} />
				<div className={style.user}>
					<NavItem
						icon={<img src={nouser} alt="profile photo" className={style.userimg} />}
						name="Usuario"
						state={state}
					/>
				</div>
			</nav>
		</div>
	);
}

export default Sidebar;
