import { useState } from "react";
import PhotoSelector from "../../components/photo-selector/PhotoSelector";
import Titles from "../../components/titles/Titles";
import useVerification from "../../hooks/useVerification";

function UserForm() {
	const { verifyNewData } = useVerification();
	const [nameE, setNameE] = useState("");
	const [surnameE, setSurnameE] = useState("");
	const [selectedPhoto, setSelectedPhoto] = useState(1);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (verifyNewData(e, setNameE, setSurnameE)) {
		}
	};

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
						<input type="text" placeholder="La Mona" name="username" />
						<small>{nameE}</small>
					</div>
					<div className="columnInputs">
						<label>Apellido</label>
						<input type="text" placeholder="Jimenez" name="usersurname" />
						<small>{surnameE}</small>
					</div>
				</div>
				<PhotoSelector setSelectedPhoto={setSelectedPhoto} selectedPhoto={selectedPhoto} />
				<button>Enviar</button>
			</form>
		</section>
	);
}

export default UserForm;
