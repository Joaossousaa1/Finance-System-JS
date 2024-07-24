export function createBtnDelete() {
  const btn = document.createElement("button")
  btn.classList.add("delete-btn")

  const icon = document.createElement("i")
  icon.classList.add("fas")
  icon.classList.add("fa-trash-alt")

  btn.appendChild(icon)
  
  return btn
}