let counterValue = 0;

const counterEl = document.querySelector("#value");

const minusBtnEl = document.querySelector('button[data-action="decrement"]');

const plusBtnEl = document.querySelector('button[data-action="increment"]');

minusBtnEl.addEventListener("click", () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
});

plusBtnEl.addEventListener("click", () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
});