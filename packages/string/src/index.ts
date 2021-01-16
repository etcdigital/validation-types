const isString = (value: any): boolean => {
	if (!value) {
		return false;
	}
	return typeof value === "string";
};

export default isString;
