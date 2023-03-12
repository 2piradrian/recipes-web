import style from "./style.module.css";

type Props = {
	id: number;
};

function StepsInput({ id }: Props) {
	return (
		<div className={style.arrowStep}>
			<label>{id})</label>
			<input placeholder="Que debo hacer ahora?" name={`name${id}`} />
		</div>
	);
}

export default StepsInput;
