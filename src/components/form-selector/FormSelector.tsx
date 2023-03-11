import "../../styles/forms.css";

type Props = {
	name: string;
	data: Array<string>;
	label: string;
};

function FormSelector({ name, data, label }: Props) {
	return (
		<select name={name}>
			<option value="">{label}</option>
			{data.map((item) => (
				<option key={item} value={item}>
					{item}
				</option>
			))}
		</select>
	);
}

export default FormSelector;
