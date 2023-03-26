import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

type Props = {
	route: string;
	content: ReactNode;
};

function ActionButton({ route, content }: Props) {
	const navigate = useNavigate();
	return (
		<div
			className={style.container}
			onClick={() => {
				navigate(route);
			}}>
			{content}
		</div>
	);
}

export default ActionButton;
