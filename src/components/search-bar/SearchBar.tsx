import style from "./style.module.css";
import { categories } from "../../data/data";
import { Dispatch, SetStateAction } from "react";

type Props = {
	setFilter: Dispatch<SetStateAction<string | null>>;
};

function SearchBar({ setFilter }: Props) {
	return (
		<div className={style.container}>
			<form className="form">
				<label>Búsqueda</label>
				<input type="text" placeholder="Hamburguesas" />
			</form>
			<div className={style.categories}>
				<div
					className={style.categoryContainer}
					onClick={() => {
						setFilter(null);
					}}>
					Todas
				</div>
				{categories.map((cat) => (
					<div
						className={style.categoryContainer}
						key={cat}
						onClick={() => {
							setFilter(cat);
						}}>
						{cat}
					</div>
				))}
			</div>
		</div>
	);
}

export default SearchBar;
