const sum = require("./sum")

test('Sum should return correct values', () => {

	expect(sum(1, 3)).toBe(4)
})

// test('RESET TEST', () => {
// 	expect(reset(1 + 3)).toBe(this.setState({ result: "" }))
// });
