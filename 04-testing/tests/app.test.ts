import {expect, describe, test} from "@jest/globals";

describe("Test in app file", () => { 
	
	test("should be true", () => {
		// 1. Arrange
		const num1 = 1;
		const num2 = 2;
		
		// 2. Act
		const result = num1 + num2;
		
		// 3. Assert
		expect(result).toBe(3);
	});
})
