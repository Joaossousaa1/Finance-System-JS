export function createItemContainer(id, title) {
  let div = document.createElement("div")
  div.classList.add("flex")
  div.classList.add("item")
  div.id = `item-${title}-${id}`

  return div
}

