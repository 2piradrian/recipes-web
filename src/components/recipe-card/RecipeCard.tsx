import { useEffect, useState } from "react";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useRecipes from "../../hooks/useRecipes";
import { fullUserData, recipe } from "../../types/types";
import UserTag from "../user-tag/UserTag";
import style from "./style.module.css";

function RecipeCard({ id, name, image, category, description, authorname, authorphoto }: recipe) {
	const navigate = useNavigate();
	const { manageLike } = useRecipes();
	const [liked, setLiked] = useState(false);
	const userData: fullUserData = useSelector((state: any) => state.userData);

	useEffect(() => {
		console.log({ name, category, authorname, authorphoto });
		setLiked(userData.favourites?.includes(id!));
	}, [userData]);

	const setText = (text: string, number: number) => {
		if (text.length > number) {
			text = text.slice(0, number) + "...";
		}
		return text;
	};

	return (
		<div className={style.container}>
			<div className={style.dataContainer} onClick={() => navigate(`/recipe/${id}`)}>
				<img src={image} alt={name} className={style.image} />
				<div className={style.info}>
					<h3 className={style.name}>{setText(name, 20)}</h3>
					<h4 className={style.category}>{category}</h4>
					<p className={style.description}>{setText(description, 100)}</p>
				</div>
			</div>
			<div className={style.interactive}>
				<UserTag author={authorname} photo={authorphoto!} />
				<div className={style.likesContainer} onClick={() => manageLike(id!)}>
					{liked ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
				</div>
			</div>
		</div>
	);
}

export default RecipeCard;
