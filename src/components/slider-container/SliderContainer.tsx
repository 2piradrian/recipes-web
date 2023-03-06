import style from "./style.module.css";
import { recipe } from "../../types/types";

type Props = {
	title: string;
	recipes: Array<recipe>;
};

function SliderContainer({ title, recipes }: Props) {
	return <div>SliderContainer</div>;
}

export default SliderContainer;
