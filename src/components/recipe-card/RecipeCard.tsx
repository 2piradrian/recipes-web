import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { recipe } from "../../types/types";
import UserTag from "../user-tag/UserTag";
import style from "./style.module.css";

function RecipeCard({ id, name, image, category, description, authorname, authoruid }: recipe) {
	const navigate = useNavigate();

	const setText = (text: string, number: number) => {
		if (text.length > number) {
			text = text.slice(0, number) + "...";
		}
		return text;
	};

	return (
		<div className={style.container} onClick={() => navigate(`/recipe/${id}`)}>
			<img src={image} alt={name} className={style.image} />
			<div className={style.info}>
				<h3 className={style.name}>{setText(name, 20)}</h3>
				<h4 className={style.category}>{category}</h4>
				<p className={style.description}>{setText(description, 100)}</p>
				<div className={style.interactive}>
					<UserTag author={authorname} />
					{/* <MdFavorite /> */}
					<MdOutlineFavoriteBorder />
				</div>
			</div>
		</div>
	);
}

export default RecipeCard;
