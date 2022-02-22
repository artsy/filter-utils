export const parsePriceRange = (priceRange: string) => {
  const [min, max] = priceRange.split("-").map((value: string) => {
    return value === "*" ? value : (+value).toLocaleString()
  })

  let label: string

  if (min === "*") {
    label = `$0-$${max}`
  } else if (max === "*") {
    label = `$${min}+`
  } else {
    label = `$${min}-$${max}`
  }

  return label
}
