export function createItemValue(value) {
  const span = document.createElement("span")
  span.classList.add("item-value")
  span.textContent = `R$ ${value}`
  return span
}