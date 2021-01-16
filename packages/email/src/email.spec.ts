import isEmail from "./";

describe("isEmail", () => {
	it("Invalid", () => {
		expect(isEmail("mega@zord")).toBe(false);
		expect(isEmail("valid")).toBe(false);
		expect(isEmail("test@.com")).toBe(false);
		expect(isEmail("test.com")).toBe(false);
	});
	it("Valid", () => {
		expect(isEmail("mega@zord.com")).toBe(true);
		expect(isEmail("mega@zord.tech")).toBe(true);
		expect(isEmail("test@test.com")).toBe(true);
		expect(isEmail("test@sub.test.com")).toBe(true);
	});
});
