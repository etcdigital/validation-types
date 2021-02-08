const isNumber = (value: any) => {
	const newValue = (value || "").toString().replace(/\D/g, "");
	return parseInt(value, 10) && newValue === value.toString();
};

export default isNumber;
