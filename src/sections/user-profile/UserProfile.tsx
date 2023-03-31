import { photoList } from "../../data/data";
import { fullUserData } from "../../types/types";
import nouser from "../../assets/nouser.jpg";
import style from "./style.module.css";

type Props = {
	user: fullUserData;
};

function UserProfile({ user }: Props) {
	return (
		<div className={style.container}>
			<img
				src={photoList[user.image] || nouser}
				onError={({ currentTarget }) => {
					currentTarget.onerror = null;
					currentTarget.src = nouser;
				}}
				alt="profile"
				className={style.photo}
			/>
			<h1 className={style.name}>
				{user.name} {user.surname}
			</h1>
		</div>
	);
}

export default UserProfile;
