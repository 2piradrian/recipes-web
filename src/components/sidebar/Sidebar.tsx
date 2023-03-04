import style from "./style.module.css";
/* assets */
import nouser from "../../assets/nouser.jpg";
import arrowright from "../../assets/arrow-right.svg";
import home from "../../assets/home.svg";

function Sidebar() {
	return (
		<div className={style.container}>
			<nav className={style.sidebar}>
				<img src={arrowright} alt="arrow" className={style.arrowicon} />
				<div className={style.routes}>
					<div className={style.route}>
						<img src={home} alt="home" />
						<p>Home</p>
					</div>
					<div className={style.route}>
						<img src={home} alt="home" />
						<p>Home</p>
					</div>
					<div className={style.route}>
						<img src={home} alt="home" />
						<p>Home</p>
					</div>
					<div className={style.route}>
						<img src={home} alt="home" />
						<p>Home</p>
					</div>
					<div className={style.route}>
						<img src={home} alt="home" />
						<p>Home</p>
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
