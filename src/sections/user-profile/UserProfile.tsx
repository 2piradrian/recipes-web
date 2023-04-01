import { photoList } from "../../data/data";
import { fullUserData } from "../../types/types";
import CategoriesSelector from "../../components/categories-selector/CategoriesSelector";
import nouser from "../../assets/nouser.jpg";
import style from "./style.module.css";
import ActionButton from "../../components/action-button/ActionButton";
import { IoMdExit } from "react-icons/io";
import { auth } from "../../firebase";

type Props = {
	user: fullUserData;
	preferred: string[];
	setPreferred: (value: React.SetStateAction<Array<string>>) => void;
};

function UserProfile({ user, setPreferred, preferred }: Props) {
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
			<h2 className={style.categories}>Tus preferidos:</h2>
			<CategoriesSelector setPreferred={setPreferred} preferred={preferred} />
			<ActionButton
				content={<IoMdExit />}
				action={() => {
					auth.signOut();
				}}
			/>
		</div>
	);
}

export default UserProfile;
