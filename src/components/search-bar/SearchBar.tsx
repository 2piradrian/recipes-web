import style from "./style.module.css";
import { categories } from "../../data/data";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filter_category, no_filters } from "../../redux/actions/actions";

function SearchBar() {
	const [filter, setFilter] = useState<string | null>("");

	const dispatch = useDispatch();

	useEffect(() => {
		/* handleScroll(); */
		dispatch(filter ? filter_category(filter) : no_filters());
	}, [filter]);

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
