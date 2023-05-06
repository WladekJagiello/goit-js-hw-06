const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
    event.currentTarget.value.length === Number(inputEl.getAttribute("data-length")) ?
    (inputEl.classList.add("valid"), inputEl.classList.remove("invalid")) :
    (inputEl.classList.add("invalid"), inputEl.classList.remove("valid"));
});
