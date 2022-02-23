import { convertToCentimeters } from "./convertToCentimeters"
import { Metric, Numeric } from "./types"

export const parseRange = (range: string = "", metric: Metric): Numeric[] => {
  return range.split("-").map((s) => {
    if (s === "*") return s
    const value = parseFloat(s)

    if (metric === "cm") {
      return convertToCentimeters(value)
    }

    return value
  })
}
