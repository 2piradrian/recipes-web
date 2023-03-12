import style from "./style.module.css";

type Props = {
	id: number;
};

function StepsInput({ id }: Props) {
	return (
		<div className={style.arrowStep}>
			<label>{id})</label>
			<input placeholder="Azúcar" name={`name${id}`} />
		</div>
	);
}

export default StepsInput;
