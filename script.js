function getRandomUint8() {
  return Math.floor(256 * Math.random())
}

const CONTAINER_SIZE = 800

const container = document.querySelector(".container")
container.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("pixel")) {
    if (parseFloat(event.target.style.opacity) == 0.0) {
      event.target.style.backgroundColor =
        `rgb(${getRandomUint8()}, ${getRandomUint8()}, ${getRandomUint8()})`
    }
    event.target.style.opacity =
      parseFloat(event.target.style.opacity) + 0.1
  }
})

const sizeDisplay = document.querySelector("h3")

function generateGrid(x) {
  for (let i = 0; i < (x ** 2); ++i) {
    const pixelDiv = document.createElement("div")
    pixelDiv.classList.add("pixel")
    pixelDiv.style.width = (CONTAINER_SIZE / x) + "px"
    pixelDiv.style.height = (CONTAINER_SIZE / x) + "px"
    pixelDiv.style.opacity = 0
    container.appendChild(pixelDiv)
  }
  sizeDisplay.textContent = `Current Size: ${x}x${x}`
}

const configureButton = document.querySelector("#configureButton")
configureButton.addEventListener("click", () => {
  let size = prompt("Enter a new size (1-100)")
  size = Math.max(Math.min(size, 100), 1)
  container.replaceChildren()
  generateGrid(size)
})

container.style.width = CONTAINER_SIZE
container.style.height = CONTAINER_SIZE
generateGrid(16)
