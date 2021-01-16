import isObject from "./";

describe("isObject", () => {
	it("Invalid", () => {
		expect(isObject(0)).toBe(false);
	});
	it("Valid", () => {
		expect(isObject({})).toBe(true);
	});
});
