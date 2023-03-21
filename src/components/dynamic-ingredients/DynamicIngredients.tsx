import { useState } from "react";
import IngredientsInput from "../ingredients-input/IngredientsInput";

import style from "./style.module.css";

type Props = {
	data: any[];
};

function DynamicIngredients({ data }: Props) {
	const [count, setCount] = useState(data.length || 1);

	const handleDecrease = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};

	const handleIncrease = () => {
		setCount(count + 1);
	};

	let ingredients = [];
	if (!data.length) {
		for (let i = 0; i < count; i++) {
			ingredients.push(<IngredientsInput key={i} id={i} />);
		}
	} else {
		ingredients = data.map((ingredient, index) => (
			<IngredientsInput key={index} id={index} ingredient={ingredient} />
		));
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
