import { renderItems } from "./functions/elements/renderItems.js";
import { fetchItems } from "./functions/fetchItems.js";

renderItems({ id: 1, name: "Salário", value: - 2000 })

let transactions = []

async function setup() {
  const result = await fetchItems()
  transactions.push(...result)
}

console.log(transactions)

addEventListener("DOMContentLoaded", setup)