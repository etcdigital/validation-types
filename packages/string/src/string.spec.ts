import isString from "./";

describe("isString", () => {
	it("Invalid", () => {
		expect(isString(0)).toBe(false);
	});
	it("Valid", () => {
		expect(isString("19239012")).toBe(true);
	});
});
