const rewire = require("rewire")
const main = rewire("./main")
const convertCreditCard = main.__get__("convertCreditCard")
const idInvalidCardCompanies = main.__get__("idInvalidCardCompanies")
// @ponicode
describe("convertCreditCard", () => {
    test("0", () => {
        convertCreditCard(["6709431991929328", "675966051848003956", "4290-9858-4003-9702", "6767-0660-5154-5695-946"])
    })

    test("1", () => {
        convertCreditCard(["6709431991929328", "4290-9858-4003-9702", "3432-903341-73690", "6767-0660-5154-5695-946"])
    })

    test("2", () => {
        convertCreditCard(["3432-903341-73690", "3432-903341-73690", "4290-9858-4003-9702", "6709431991929328"])
    })
})

// @ponicode
describe("idInvalidCardCompanies", () => {
    test("0", () => {
        let param1 = [[5, 5, 6, 6], [6.0, 4, 3, 4.5], [2.0, 7.0, 5, 5.0], [3, 3.0, 5, 4.0]]
        idInvalidCardCompanies(param1)
    })
})
