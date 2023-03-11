import { useState } from "react";
import IngredientsInput from "../ingredients-input/IngredientsInput";

import style from "./style.module.css";

function DynamicIngredients() {
	const [count, setCount] = useState(1);

	const handleDecrease = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};

	const handleIncrease = () => {
		setCount(count + 1);
	};

	let ingredients = [];
	for (let i = 0; i < count; i++) {
		ingredients.push(<IngredientsInput key={i} id={i} />);
	}
	return (
		<div className="columnInputs">
			<label>Ingredientes</label>
			<div className="arrowInputs">
				<div className={style.ingredientsBtnContainer}>
					<button type="button" className={style.ingredientsBtn} onClick={handleDecrease}>
						Quitar ingrediente
					</button>
					<button type="button" className={style.ingredientsBtn} onClick={handleIncrease}>
						Añadir ingrediente
					</button>
				</div>
			</div>
			<div className={style.ingredientsContainer}>{ingredients}</div>
		</div>
	);
}

export default DynamicIngredients;
