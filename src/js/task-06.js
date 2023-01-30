const inputEl = document.querySelector("#validation-input");
const inputLength = inputEl.getAttribute("data-length");
inputEl.addEventListener("blur", isValueCorrect);

function isValueCorrect() {
  if (inputEl.value.length === inputLength * 1) {
    addClassValid();
    removeClassInvalid();
  } else if (inputEl.value === "") {
    removeClassValidInvalid();
  } else {
    addClassInvalid();
  }
}

function addClassValid() {
  inputEl.classList.add("valid");
}

function addClassInvalid() {
  inputEl.classList.add("invalid");
}

function removeClassValidInvalid() {
  inputEl.classList.remove("valid", "invalid");
}

function removeClassInvalid() {
  inputEl.classList.remove("invalid");
}
