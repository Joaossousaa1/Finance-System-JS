import { createItemContainer } from "./createItemContainer.js";
import { createItemDescription } from "./createItemDescription.js";
import { createItemValue } from "./createItemValue.js";
import { createItemType } from "./createItemType.js";

export function renderItems(item) {
  const div = createItemContainer(item.id, item.name)
  const name = createItemDescription(item.name)
  const valueItem = createItemValue(item.value)
  const type = createItemType(item.value)

  document.querySelector("#items").appendChild(div)
  div.append(name, valueItem, type)

  return div
}