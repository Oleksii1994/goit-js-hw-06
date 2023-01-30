const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

textEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener("input", updateFontSize);

function updateFontSize(event) {
  textEl.style.fontSize = `${event.target.value}px`;
}
