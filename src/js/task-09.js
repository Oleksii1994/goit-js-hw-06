function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector(".change-color");
const textEl = document.querySelector(".color");

buttonEl.addEventListener("click", changeBodyColorHandler);

function changeBodyColorHandler() {
  const colorEl = getRandomHexColor();
  document.body.style.backgroundColor = colorEl;
  textEl.textContent = colorEl;
}
