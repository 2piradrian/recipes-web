import style from "./style.module.css";

type Props = {
	title: string;
	step: number;
};

function StepTitle({ title, step }: Props) {
	return (
		<div className={style.container}>
			<div className={style.number}>{step}</div>
		</div>
	);
}

export default StepTitle;
