import { fullUserData, partialUserData } from "./../types/types";
function useVerification() {
	/* validación de login y register */
	const validateInputs = (
		e: React.FormEvent<HTMLFormElement>,
		emailError: (value: React.SetStateAction<string>) => void,
		passError: (value: React.SetStateAction<string>) => void,
		repeatError?: ((value: React.SetStateAction<string>) => void) | undefined
	) => {
		const email = e.currentTarget.email.value;
		const password = e.currentTarget.password.value;
		const repeatpass = e.currentTarget.repeatpass?.value;

		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			emailError("Email no es válido");
			return false;
		}
		emailError("");
		if (password.length < 6) {
			passError("Contraseña debe tener al menos 6 caracteres");
			return false;
		}
		passError("");
		if (repeatpass && password !== repeatpass) {
			typeof repeatError === "function" && repeatError("Las contraseñas no coinciden");
			return false;
		}
		typeof repeatError === "function" && repeatError("");

		return true;
	};

	/* verificación de data completa o parcial */
	const verifyUserData = (userData: fullUserData | partialUserData): boolean => {
		const requiredKeys: (keyof fullUserData)[] = [
			"uid",
			"email",
			"name",
			"surname",
			"image",
			"categories",
			"favourites",
		];

		for (const key of requiredKeys) {
			if (!(key in userData)) {
				return false;
			}
		}

		return true;
	};

	return { validateInputs };
}

export default useVerification;
