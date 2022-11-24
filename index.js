const form = document.querySelector(".form");
const firstName = document.querySelector(".form__input--name");
const lastName = document.querySelector(".form__input--lastname");
const email = document.querySelector(".form__input--email");
const password = document.querySelector(".form__input--password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateInputs()) {
    form.reset();
  }
});

const msgError = function (element, message) {
  const inputContainer = element.parentElement;
  const errorField = inputContainer.querySelector(".form__error");
  const input = inputContainer.querySelector(".form__input");

  errorField.innerText = message;
  errorField.classList.remove("success");
  errorField.classList.add("error");
  input.classList.remove("success1");
  input.classList.add("error1");
  input.setAttribute("placeholder", "");

  return false;
};

const msgSuccess = function (element) {
  const inputContainer = element.parentElement;
  const errorField = inputContainer.querySelector(".form__error");
  const input = inputContainer.querySelector(".form__input");

  errorField.innerText = "";
  errorField.classList.remove("error");
  errorField.classList.add("success");
  input.classList.remove("error1");
  input.classList.add("success1");

  return true;
};

const validateEmail = function (email) {
  const re = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return re.test(String(email).toLowerCase());
};

const validateInputs = function () {
  const valueFirstName = firstName.value.trim();
  const valueLastName = lastName.value.trim();
  const valueEmail = email.value.trim();
  const valuePassword = password.value.trim();

  let errorCount = 0;

  if (valueFirstName === "") {
    msgError(firstName, "First Name cannot be empty");
    errorCount++;
  } else {
    msgSuccess(firstName);
  }

  if (valueLastName === "") {
    msgError(lastName, "Last Name cannot be empty");
    errorCount++;
  } else {
    msgSuccess(lastName);
  }

  if (valueEmail === "") {
    msgError(email, "Email cannot be empty");
    errorCount++;
  } else if (!validateEmail(valueEmail)) {
    msgError(email, "Looks like this is not an email");
  } else {
    msgSuccess(email);
  }

  if (valuePassword === "") {
    msgError(password, "Password cannot be empty");
    errorCount++;
  } else {
    msgSuccess(password);
  }

  if (errorCount === 0) return true;
};
