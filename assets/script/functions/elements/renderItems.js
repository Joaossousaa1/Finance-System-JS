import { createItemContainer } from "./createItemContainer.js";
import { createItemDescription } from "./createItemDescription.js";
import { createItemValue } from "./createItemValue.js";
import { createItemType } from "./createItemType.js";

export function renderItems(id, title, value) {
  const div = createItemContainer(id, title)
  const item = createItemDescription(title)
  const valueItem = createItemValue(value)
  const type = createItemType(value)

  document.querySelector("#items").appendChild(div)
  div.append(item, valueItem, type)

  return div
}