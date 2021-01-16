const isBoolean = (value: any): boolean => {
	if (!value) {
		return false;
	}
	return typeof value === "boolean";
};

export default isBoolean;
