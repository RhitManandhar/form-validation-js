//Select all elements needed
const error = document.querySelector(".errors")
const errorList = document.querySelector(".error-list")
const form = document.querySelector("#form")
const errorInfo = {
  username: "Username must be at least 6 characters",
  password: "Password must be at least 10 characters long",
  passwordConfirm: "Password and password confirmation must match",
  terms: "Ensure that the terms checkbox is checked",
}

form.addEventListener("submit", (e) => {
  const user = document.querySelector("#username").value
  const pass = document.querySelector("#password").value
  const passConfirm = document.querySelector("#password-confirmation").value
  const terms = document.querySelector("#terms")
  clearError()
  checkError(user, pass, passConfirm, terms)
  if (errorList.children.length > 0) {
    e.preventDefault()
  }
})

function checkError(username, password, passwordConfirm, terms) {
  if (username.length <= 6) {
    showError("username")
  }
  if (password.length <= 10) {
    showError("password")
  }
  if (password != passwordConfirm) {
    showError("passwordConfirm")
  }
  if (!terms.checked) {
    showError("terms")
  }
}

function clearError() {
  while (errorList.firstChild) {
    errorList.removeChild(errorList.lastChild)
  }
}

function showError(key) {
  let li = document.createElement("li")
  errorList.appendChild(li)
  li.textContent = errorInfo[key]
  error.classList.add("show")
}
