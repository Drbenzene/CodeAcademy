const rewire = require("rewire")
const script = rewire("./script")
const getQuote = script.__get__("getQuote")
// @ponicode
describe("getQuote", () => {
    test("0", () => {
        let result = getQuote()
        expect(result).toMatchSnapshot()
    })
})
