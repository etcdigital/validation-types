const getOnlyNumbers = (value: string, parse = false): string | number => {
	const newValue = (value || "").toString().replace(/\D/g, "");
	return parse ? parseInt(newValue, 10) : newValue;
};

const isNumber = (value: any) => {
	return parseInt(value, 10) && getOnlyNumbers(value) === value.toString();
};

export default isNumber;
