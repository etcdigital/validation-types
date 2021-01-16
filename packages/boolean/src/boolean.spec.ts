import isBoolean from "./";

describe("isBoolean", () => {
	it("Invalid", () => {
		expect(isBoolean(0)).toBe(false);
	});
	it("Valid", () => {
		expect(isBoolean(true)).toBe(true);
	});
});
