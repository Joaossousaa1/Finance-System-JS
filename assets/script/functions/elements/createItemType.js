import { createBtnDelete } from "./createBtnDelete.js"
import { createIconType } from "./createIconType.js"

export function createItemType(value) {
  const span = document.createElement("span")
  span.classList.add("item-type")
  
  const icon = createIconType(value)
  const btn = createBtnDelete()

  span.append(icon, btn)
  
  return span
}