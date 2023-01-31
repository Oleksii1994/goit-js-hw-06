function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("[type=number]");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const collectionEl = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const listItems = [];

  amount = Number(inputEl.value);
  listItems.length = amount;
  listItems.fill("");

  listItems.map((value, index) => {
    listItems.forEach((el) => {
      value = document.createElement("div");
      value.style.width = 30 + index * 10 + "px";
      value.style.height = 30 + index * 10 + "px";
      value.style.backgroundColor = getRandomHexColor();
    });
    listItems.push(value);
  });

  return collectionEl.append(...listItems);
}

function destroyBoxes() {
  collectionEl.innerHTML = "";
  inputEl.value = "";
}
