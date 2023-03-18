import nouser from "../../assets/nouser.jpg";
import style from "./style.module.css";

type Props = {
	author: string;
};

function UserTag({ author }: Props) {
	return (
		<div className={style.container}>
			<img
				src={`../../assets/profile/${1}.jpg`}
				onError={({ currentTarget }) => {
					currentTarget.onerror = null;
					currentTarget.src = nouser;
				}}
				alt="profile photo"
				className={style.photo}
			/>
			<p className={style.author}>{author}</p>
		</div>
	);
}

export default UserTag;
