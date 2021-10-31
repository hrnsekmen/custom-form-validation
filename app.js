// Create config file
const config = {
  messages: {
    username_error: "Username cannot be blank!",
    email_error: "Email cannot be blank!",
    email_format_error: "This is not a valid email, please try again.",
    password_error: "Password cannot be blank!",
    password2_error: "Please write your password again!",
    password_match_error: "Passwords are not same!",
  },
  valid: "form-item success",
  invalid: "form-item error",
};
// Select elements
const formContainer = document.querySelector(".container");
const successContainer = document.querySelector(".success-container");
const btnContainer = document.querySelector(".btn-container");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const form = document.getElementById("form");
const button = document.getElementById("button");
const first_button = document.getElementById("first-page-button");
const formItems = document.querySelectorAll(".form-item");
first_button.addEventListener("click", displayForm);
form.addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();
  checkInputs();
  checkValid();
}
function checkValid() {
  const input1 = username.parentElement.className;
  const input2 = email.parentElement.className;
  const input3 = password.parentElement.className;
  const input4 = password2.parentElement.className;

  if ((input1, input2, input3, input4 === config.valid)) {
    displaySuccessPage();
  } else {
    displayForm();
  }
}
function displaySuccessPage() {
  successContainer.setAttribute("style", "display:flex !important");
  formContainer.setAttribute("style", "display:none !important");
}
function displayForm() {
  formContainer.setAttribute("style", "display:block !important");
  btnContainer.setAttribute("style", "display:none !important");
}
function checkInputs() {
  const u = username.value.trim();
  const em = email.value.trim();
  const p = password.value.trim();
  const p2 = password2.value.trim();
  // USERNAME
  if (u === "") {
    setError(username, config.messages.username_error);
  } else {
    setSuccess(username);
  }
  // EMAIL
  if (em === "") {
    setError(email, config.messages.email_error);
  } else {
    setSuccess(email);
  }
  // PASSWORD
  if (p === "") {
    setError(password, config.messages.password_error);
  } else {
    setSuccess(password);
  }
  // PASSWORD2
  if (p2 === "") {
    setError(password2, config.messages.password2_error);
  } else {
    if (p === p2) {
      setSuccess(password2);
    } else {
      setError(password, "");
      setError(password2, config.messages.password_match_error);
    }
  }
}
function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-item error";
}
function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-item success";
}
