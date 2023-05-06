const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  const dataForm =
    email.value === "" || password.value === ""
      ? alert("Всі поля повинні бути заповнені!")
      : { [email.name]: email.value, [password.name]: password.value };
  console.log(dataForm);
  event.currentTarget.reset();
});
