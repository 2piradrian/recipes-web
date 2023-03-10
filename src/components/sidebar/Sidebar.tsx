import { useState } from "react";
import style from "./style.module.css";
import NavRoutes from "../nav-routes/NavRoutes";
/* assets */
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

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
			</nav>
		</div>
	);
}

export default Sidebar;
