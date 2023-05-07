function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");
const createEl = document.querySelector("button[data-create]");
const destroyEl = document.querySelector("button[data-destroy]");
let amount;

inputEl.addEventListener("input", (event) => {
  if (boxesEl.innerHTML !== "") {
    boxesEl.innerHTML = "";
  }
  if (event.currentTarget.value > 100) {
    inputEl.value = "";
    return alert("Введіть число від 1 до 100");
  } else {
    amount = event.currentTarget.value;
  }
});

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
  if (inputEl.value !== "") {
    createBoxes(amount);
    inputEl.value = "";
  } else {
    boxesEl.innerHTML = "";
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
