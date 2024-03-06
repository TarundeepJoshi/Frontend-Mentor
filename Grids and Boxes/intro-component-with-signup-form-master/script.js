const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailAddress = document.getElementById("email");
const password = document.getElementById("password");
const submitButton = document.getElementById("submitFormButton");
const form = document.querySelector("form");

const firstNameErrorMessage = document.querySelector(".error-message-first");
const lastNameErrorMessage = document.querySelector(".error-message-last");
const emailErrorMessage = document.querySelector(".error-message-email");
const passwordErrorMessage = document.querySelector(".error-message-password");

const firstNameErrorIcon = document.querySelector(".icon1");
const lastNameErrorIcon = document.querySelector(".icon2");
const emailErrorIcon = document.querySelector(".icon3");
const passwordErrorIcon = document.querySelector(".icon4");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  firstNameValidation();
  lastNameValidation();
  emailValidation();
  passwordValidation();

  if (!isValidForm()) {
    return;
  }
  form.submit();
});

function firstNameValidation() {
  if (!firstName.value.trim()) {
    firstNameErrorIcon.classList.remove("hidden");
    firstNameErrorMessage.innerHTML = "First Name cannot be empty";
  } else {
    firstNameErrorIcon.classList.add("hidden");
    firstNameErrorMessage.innerHTML = "";
  }
}
function lastNameValidation() {
  if (!lastName.value.trim()) {
    lastNameErrorIcon.classList.remove("hidden");
    lastNameErrorMessage.innerHTML = "Last Name cannot be empty";
  } else {
    lastNameErrorIcon.classList.add("hidden");
    lastNameErrorMessage.innerHTML = "";
  }
}

function emailValidation() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = emailAddress.value;
  if (emailRegex.test(email)) {
    emailErrorMessage.innerHTML = "";
    emailErrorIcon.classList.add("hidden");
  } else {
    emailErrorMessage.innerHTML = "Looks like this is not an email";
    emailErrorIcon.classList.remove("hidden");
  }
}

function passwordValidation() {
  if (!password.value.trim()) {
    passwordErrorIcon.classList.remove("hidden");
    passwordErrorMessage.innerHTML = "Password cannot be empty";
  } else {
    passwordErrorIcon.classList.add("hidden");
    passwordErrorMessage.innerHTML = "";
  }
}
