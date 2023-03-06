function useVerification() {
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

	return { verifyRegister, verifyLogin };
}

export default useVerification;
