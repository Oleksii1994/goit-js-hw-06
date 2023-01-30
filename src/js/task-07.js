const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", updateFontSize);

function updateFontSize() {
  textEl.style.fontSize = inputEl.value.concat("px");
}

// inputEl.addEventListener(
//   "input",
//   (e) => (textEl.style.fontSize = `${e.currentTarget.value}px`)
// );
