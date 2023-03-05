import { useState } from "react";
import style from "./style.module.css";
/* assets */
import nouser from "../../assets/nouser.jpg";
import home from "../../assets/home.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

function Sidebar() {
	const [state, setState] = useState<boolean>(false);

	return (
		<div className={style.container} style={{ width: `${state ? "220px" : "50px"}` }}>
			<nav className={style.sidebar}>
				{state ? (
					<AiOutlineClose onClick={() => setState(!state)} />
				) : (
					<RxHamburgerMenu onClick={() => setState(!state)} />
				)}
				<div className={style.routes}>
					<div className={style.route}>
						<img src={home} alt="home" />
						<p style={{ opacity: `${state ? "1" : "0"}` }}>Home</p>
					</div>
				</div>
				<div className={style.user}>
					<img src={nouser} alt="profile photo" />
					<span>Invitado</span>
				</div>
			</nav>
		</div>
	);
}

export default Sidebar;
