let input = document.getElementById("input");
const submitBtn = document.getElementById("submitBtn");
const validEmail = document.getElementById("validEmail");
const emailRegex = new RegExp(
  "^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$"
);

function isEmailValid() {
  let inputValue = input.value;

  if (inputValue && emailRegex.test(inputValue)) {
    input.value = "";
    validEmail.textContent = "Email sent";
    validEmail.style.color = "green";
  } else {
    validEmail.textContent = "Please provide a valid email";
    input.style.borderColor = "red";
    validEmail.style.color = "red";
  }
}

submitBtn.addEventListener("click", isEmailValid);
