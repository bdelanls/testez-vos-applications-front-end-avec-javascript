import { sayHello } from "./unit1";

describe("SayHello Unit Test Suites", () => {
    
    it("should return 'Hello World'", () => {
        expect(sayHello()).toBe("Hello, World");
    });

    it("should return 'Hello, Bertrand'", () => {
        expect(sayHello("Bertrand")).toBe("Hello, Bertrand");
    });
});