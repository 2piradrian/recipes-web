import { useState } from "react";
import style from "./style.module.css";

function RecipeCategories() {
	const categories = [
		"Carnes",
		"Vegano",
		"Vegetariano",
		"Desayunos",
		"Infusiones",
		"Tragos",
		"Sopas",
		"Ensaladas",
		"Guarniciones",
		"Postres",
		"Panaderia",
		"Pasteleria",
		"Snacks",
		"Festivo",
		"Internacional",
		"Pescados y mariscos",
		"Pizzas",
		"Empanadas",
	];

	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

	function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
		const category = event.target.value;
		if (selectedCategories.includes(category)) {
			setSelectedCategories(selectedCategories.filter((c) => c !== category));
		} else {
			setSelectedCategories([...selectedCategories, category]);
		}
	}

	return (
		<div className={style.container}>
			{categories.map((category) => (
				<div className={style.checkbox}>
					<label key={category}>
						<input
							type="checkbox"
							value={category}
							checked={selectedCategories.includes(category)}
							onChange={handleCheckboxChange}
						/>
						{category}
					</label>
				</div>
			))}
		</div>
	);
}

export default RecipeCategories;
