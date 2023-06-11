function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");
const createEl = document.querySelector("[data-create]");
const destroyEl = document.querySelector("[data-destroy]");
let amount;

const createBoxes = (amount) => {
  let size = 30;
  let stringDiv = "";

  for (let i = 0; i < amount; i += 1) {
    stringDiv += `<div style="width: ${size}px; height: ${size}px; border-radius: 50%; align-self: center; background-color: ${getRandomHexColor()};"></div>`;
    size += 10;
  }
  boxesEl.insertAdjacentHTML("afterbegin", stringDiv);
};

createEl.addEventListener("click", () => {
  boxesEl.innerHTML = "";
  amount = inputEl.value;

  if (inputEl.value !== "" && inputEl.value < 101) {
    createBoxes(amount);
    inputEl.value = "";
  } else {
    boxesEl.innerHTML = "";
    inputEl.value = "";
    alert("Введіть число від 1 до 100");
  }
});

destroyEl.addEventListener("click", () => {
  inputEl.value === "" && boxesEl.innerHTML === ""
    ? alert("Введіть число від 1 до 100")
    : (boxesEl.innerHTML = ""),
    (inputEl.value = "");
});

boxesEl.style.display = "flex";
boxesEl.style.flexWrap = "wrap";
boxesEl.style.gap = "10px";
