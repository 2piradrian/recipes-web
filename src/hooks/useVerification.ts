function useVerification() {
	const validateInputs = (
		e: React.FormEvent<HTMLFormElement>,
		emailError: (value: React.SetStateAction<string>) => void,
		passError: (value: React.SetStateAction<string>) => void,
		repeatError?: (value: React.SetStateAction<string>) => void
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
			repeatError ? repeatError("Las contraseñas no coinciden") : undefined;
			return false;
		}
		repeatError ? repeatError("Las contraseñas no coinciden") : undefined;

		return true;
	};
	
	/* verificación de inputs de register */
	const verifyRegister = (
		e: React.FormEvent<HTMLFormElement>,
		emailError: (value: React.SetStateAction<string>) => void,
		passError: (value: React.SetStateAction<string>) => void,
		repeatError: (value: React.SetStateAction<string>) => void
	) => {
		const email = e.currentTarget.email.value;
		const password = e.currentTarget.password.value;
		const repeatpass = e.currentTarget.repeatpass.value;

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
		if (password !== repeatpass) {
			repeatError("Las contraseñas no coinciden");
			return false;
		}
		repeatError("");

		return true;
	};

	/* verificación de inputs de login */
	const verifyLogin = (
		e: React.FormEvent<HTMLFormElement>,
		emailError: (value: React.SetStateAction<string>) => void,
		passError: (value: React.SetStateAction<string>) => void
	) => {
		e.preventDefault();

		const email = e.currentTarget.email.value;
		const password = e.currentTarget.password.value;

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
		return true;
	};

	/* verificación de data completa o parcial */
	const verifyUserData = () => {};

	return { verifyRegister, verifyLogin };
}

export default useVerification;
