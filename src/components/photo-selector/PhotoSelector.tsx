import style from "./style.module.css";

type Props = {
	selectedPhoto: number;
	setSelectedPhoto: (index: number) => void;
};

function PhotoSelector({ setSelectedPhoto, selectedPhoto }: Props) {
	const images = [
		require("../../assets/profile/1.png"),
		require("../../assets/profile/2.png"),
		require("../../assets/profile/3.png"),
		require("../../assets/profile/4.png"),
		require("../../assets/profile/5.png"),
		require("../../assets/profile/6.png"),
		require("../../assets/profile/7.png"),
		require("../../assets/profile/8.png"),
	];

	const handleSelect = (index: number) => {
		setSelectedPhoto(index);
	};

	return (
		<div className={style.container}>
			<label>Selecciona tu foto de perfil:</label>
			<div className={style.photoContainer}>
				{images.map((image, index) => (
					<img
						key={index + 1}
						src={image}
						alt={`Imagen ${index + 1}`}
						style={{
							border:
								selectedPhoto === index + 1 ? "3px solid var(--contrast)" : "none",
						}}
						onClick={() => handleSelect(index)}
					/>
				))}
			</div>
		</div>
	);
}

export default PhotoSelector;
