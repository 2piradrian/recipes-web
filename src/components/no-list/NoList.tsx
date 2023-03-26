import style from "./style.module.css";
import sad from "../../assets/sad.gif";

type Props = {
	text: string;
};

function NoList({ text }: Props) {
	return (
		<div className={style.empty}>
			<p>{text}</p>
			<img src={sad} alt="sad face" />
		</div>
	);
}

export default NoList;
