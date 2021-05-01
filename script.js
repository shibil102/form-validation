const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordTwo = document.getElementById("confirm-password");

// show Error

const showError = (input, message) => {
  const parentElement = input.parentElement;
  parentElement.className = "form-control error";
  const small = parentElement.querySelector("small");
  small.innerText = message;
};

//show Success

const showSuccess = (input) => {
  const parentElement = input.parentElement;
  parentElement.className = "form-control success";
};

//Checking Required

const checkRequired = (inputArr) => {
inputArr.forEach((input) => {
if(input.value.trim() === ''){
  showError(input, `${stringUpperCase(input)} is required`)
}else{
  showSuccess(input)
}
})
}

//Length checking

const checkLength = (input, min, max) => {
if(input.value.length < min ){
  showError(input, `${stringUpperCase(input)} atleast ${min} characters`)
}
else if(input.value.length > max){
  showError(input, `${stringUpperCase(input)} must be less than ${max} characters`)
}
else
{
showSuccess(input)
}
}


//valid email

const isValidEmail = (input) => {
  const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(regEx.test(input.value)){
    showSuccess(input)
  }
  else
  {
   showError(input, `Email is not valid`)
  }
};

//check Passwords

const checkPasswords = (inputOne, inputTwo) => {
if(inputOne.value != inputTwo.value || inputTwo.value === ''){
  showError(inputTwo, 'Password not matching')
}
else{
  showSuccess(inputTwo)
}
}

//toUppercase function

const stringUpperCase = (input) => {
return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

//event

form.addEventListener("submit", function (e) {
  e.preventDefault();

 checkRequired([username, password, passwordTwo, email])
 checkLength(username, 5, 15)
 checkLength(password, 5, 20)
 isValidEmail(email)
 checkPasswords(password, passwordTwo)
});
