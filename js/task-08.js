const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  let dataForm;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!");
  } else {
    dataForm = {
      [email.name]: email.value,
      [password.name]: password.value,
    };
  }
  console.log(dataForm);
  event.currentTarget.reset();
});
