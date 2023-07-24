const btn = document.querySelector(".btn");
const field = document.querySelector(".password-container");
const textField = document.querySelector(".text-field");
const passField = document.querySelector(".password-field");

const password = [];

passField.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    password.pop();
    textField.value = password.join("");
  } else {
    password.push(e.key);
    textField.value = password.join("");
  }
});

btn.addEventListener("click", () => {
  field.classList.toggle("show");
  if (passField.value == "") {
    textField.value = "";
  }
});