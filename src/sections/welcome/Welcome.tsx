import SliderContainer from "../../components/slider-container/SliderContainer";
import Titles from "../../components/titles/Titles";

type Props = {
	/* TODO: Arreglar este tipo any */
	recipes: any;
};

function Welcome({ recipes }: Props) {
	return (
		<div className="bigcontainer">
			<Titles title="Novedades" subtitle="recetas de la comunidad" />
			<SliderContainer recipes={recipes.last3} />
			<Titles title="Para ti" subtitle="basado en tus favoritos" />
			<SliderContainer recipes={recipes.recommended} />
			<Titles title="Siguiendo" subtitle="basado en las personas que sigues" />
			<SliderContainer recipes={recipes.following} />
		</div>
	);
}

export default Welcome;
