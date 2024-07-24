export function createIconType(value) {
  const icon = document.createElement('i')

  if (value >= 0) {
    icon.classList.add("fas")
    icon.classList.add("fa-arrow-up")
  } else {
    icon.classList.add("fas")
    icon.classList.add("fa-arrow-down")
  }

  return icon
}