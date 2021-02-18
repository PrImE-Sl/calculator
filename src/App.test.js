const reset = require("./App")
const calculate = require("./App")

test('Calculate should return correct values', () => {

  expect(calculate()).toBe(4)
})

test('RESET TEST', () => {
  expect(reset(13)).toBe(setState({ result: "" }))
});
