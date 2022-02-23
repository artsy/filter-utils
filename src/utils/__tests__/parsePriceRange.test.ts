import { parsePriceRange } from "../parsePriceRange"

describe("parsePriceRange", () => {
  describe("valid input", () => {
    it("min and max are set", () => {
      const input = "42-420"

      expect(parsePriceRange(input)).toEqual("$42-$420")
    })

    it("only min is set", () => {
      const input = "42-*"

      expect(parsePriceRange(input)).toEqual("$42+")
    })

    it("only max is set", () => {
      const input = "*-420"

      expect(parsePriceRange(input)).toEqual("$0-$420")
    })
  })
})
