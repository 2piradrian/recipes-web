import { useState } from "react";
import StepsInput from "../steps-input/StepsInput";

import style from "./style.module.css";

type Props = {
	data: any;
};

function DynamicSteps({ data }: Props) {
	const [count, setCount] = useState(data.length || 1);

	const handleDecrease = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};

	const handleIncrease = () => {
		setCount(count + 1);
	};

	let steps = [];
	if (!data.length) {
		for (let i = 0; i < count; i++) {
			steps.push(<StepsInput key={i} id={i} />);
		}
	} else {
		steps = data.map((step: string, index: number) => (
			<StepsInput key={index} id={index} step={step} />
		));
	}
	return (
		<div className="columnInputs">
			<label>Pasos</label>
			<div className={style.stepsContainer}>{steps}</div>
			<div className="arrowInputs">
				<div className={style.stepsBtnContainer}>
					<button type="button" className={style.stepsBtn} onClick={handleDecrease}>
						Quitar paso
					</button>
					<button type="button" className={style.stepsBtn} onClick={handleIncrease}>
						Añadir paso
					</button>
				</div>
			</div>
		</div>
	);
}

export default DynamicSteps;
