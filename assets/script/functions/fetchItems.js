export async function fetchItems() {
  return await fetch("http://localhost:3000/items").then(res => res.json());
}