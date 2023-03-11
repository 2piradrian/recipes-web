import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import PhotoSelector from "../../components/photo-selector/PhotoSelector";
import Titles from "../../components/titles/Titles";
import useVerification from "../../hooks/useVerification";
import { set_user_data } from "../../redux/actions/actions";

function UserForm() {
	const { verifyNewData } = useVerification();
	const [nameE, setNameE] = useState("");
	const [surnameE, setSurnameE] = useState("");
	const [selectedPhoto, setSelectedPhoto] = useState(1);

	const dispatch = useDispatch();
	const partialData = useSelector((state: any) => state.userData);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const name = e.currentTarget.username.value;
		const surname = e.currentTarget.usersurname.value;

		if (verifyNewData(e, setNameE, setSurnameE)) {
			dispatch(
				set_user_data({
					...partialData,
					name,
					surname,
					image: selectedPhoto,
					recipes: [],
					categories: [],
					favourites: [],
				})
			);

			toast("Datos actualizados correctamente");
			setTimeout(() => {
				window.location.reload();
			}, 2000);
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
			<Toaster position="top-right" />
		</section>
	);
}

export default UserForm;
