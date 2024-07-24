export function createItemDescription(title) {
  const span = document.createElement("span")
  span.classList.add("item-description")
  span.textContent = title
  
  return span
}