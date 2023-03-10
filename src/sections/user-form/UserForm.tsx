import { useState } from "react";
import PhotoSelector from "../../components/photo-selector/PhotoSelector";
import Titles from "../../components/titles/Titles";

function UserForm() {
	const [selectedPhoto, setSelectedPhoto] = useState(1);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

	return (
		<section className={"bigcontainer"}>
			<Titles
				title="¡Felicidades, te has registrado!"
				subtitle="antes de continuar necesitamos saber:"
			/>
			<form className="form" onSubmit={(e) => handleSubmit(e)}>
				<div className="arrowInputs">
					<div className="columnInputs">
						<label>Nombre</label>
						<input type="text" placeholder="La Mona" name="email" />
						<small>{}</small>
					</div>
					<div className="columnInputs">
						<label>Apellido</label>
						<input type="text" placeholder="Jimenez" name="password" />
						<small>{}</small>
					</div>
				</div>
				<PhotoSelector setSelectedPhoto={setSelectedPhoto} selectedPhoto={selectedPhoto} />
				<button>Enviar</button>
			</form>
		</section>
	);
}

export default UserForm;
