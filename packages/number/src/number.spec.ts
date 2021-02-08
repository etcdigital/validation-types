import isNumber from "./";

describe("isNumber", () => {
	it("Invalid", () => {
		expect(isNumber("2019-21=16")).toBe(false);
		expect(isNumber("")).toBe(NaN);
	});
	it("Valid", () => {
		expect(isNumber("19239012")).toBe(true);
	});
});
