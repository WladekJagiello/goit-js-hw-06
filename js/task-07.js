const inputEl = document.querySelector("#font-size-control");
const outputEl = document.querySelector("#text");

outputEl.style.fontSize = "56px";

inputEl.addEventListener("input", (event) => {
  outputEl.style.fontSize = `${event.currentTarget.value}px`;
});
