const inputEl = document.querySelector("#validation-input");
const inputLength = inputEl.getAttribute("data-length");
inputEl.addEventListener("blur", isValueCorrect);

function isValueCorrect() {
  removeClass("invalid");

  if (inputEl.value.length === inputLength * 1) {
    addClass("valid");
  } else {
    addClass("invalid");
  }
}

function addClass(className) {
  inputEl.classList.add(`${className}`);
}

function removeClass(className) {
  inputEl.classList.remove(`${className}`);
}
