import RecipeCard from "../components/recipe-card/RecipeCard";

function Home() {
	return (
		<div className="bigcontainer">
			<RecipeCard
				author="Adrian Rodriguez"
				category="Carnes"
				comments={[]}
				id="1"
				image="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2021/12/Photo-by-Emerson-Vieira-on-Unsplash.jpg"
				ingredients={[]}
				name="Asado argentino"
				steps={[]}
				description="Este alimento de origen animal es una de las fuentes de hierro más completas que existe. Además de esto, también es rica en aminoácidos y vitamina B12. A pesar de esto, lo recomendable es tener un consumo moderado de las carnes rojas. Veamos que se necesita para hacer este plato…"
			/>
		</div>
	);
}

export default Home;
