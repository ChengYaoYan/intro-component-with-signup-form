const firstname = document.getElementById("firstname"),
  lastname = document.getElementById("lastname"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  submitBtn = document.getElementById("submit-btn"),
  inputs = document.querySelectorAll("input");

function showAlertMsg(inputBox, msg) {
  var alertMsg = document.createElement("p");
  var alertFlag = document.createElement("img");

  alertMsg.textContent = msg;
  alertMsg.classList.add("alert-text");
  alertMsg.id = `${inputBox.id}-alert-msg`;
  alertFlag.src = "./images/icon-error.svg";
  alertFlag.classList.add("alert-flag");
  alertFlag.id = `${inputBox.id}-alert-flag`;

  inputBox.classList.add("error");
  inputBox.parentNode.appendChild(alertMsg);
  inputBox.parentNode.appendChild(alertFlag);
}

function validateEmail(emailAddress) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(emailAddress).toLowerCase());
}

function validate() {
  if (!firstname.value) {
    firstname.focus();
    showAlertMsg(firstname, "First Name cannot be empty");
  }
  if (!lastname.value) {
    firstname.focus();
    showAlertMsg(lastname, "Last Name cannot be empty");
  }
  if (!validateEmail(email.value)) {
    firstname.focus();
    showAlertMsg(email, "Looks like this is not an email");
  }
  if (!password.value) {
    firstname.focus();
    showAlertMsg(password, "Password cannot be empty");
  }
}

submitBtn.addEventListener("click", (evt) => {
  evt.preventDefault();

  // remove all alert msg then validate
  inputs.forEach((input) => {
    let classList = Array.from(input.classList);
    if (classList.includes("error")) {
      let alertMsg = document.getElementById(`${input.id}-alert-msg`);
      let alertFlag = document.getElementById(`${input.id}-alert-flag`);

      input.classList.remove("error");
      input.parentNode.removeChild(alertMsg);
      input.parentNode.removeChild(alertFlag);
    }
  });
  validate();
});

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    let classList = Array.from(e.target.classList);
    if (classList.includes("error")) {
      let alertMsg = document.getElementById(`${e.target.id}-alert-msg`);
      let alertFlag = document.getElementById(`${e.target.id}-alert-flag`);

      e.target.classList.remove("error");
      e.target.parentNode.removeChild(alertMsg);
      e.target.parentNode.removeChild(alertFlag);
    }
  });
});
