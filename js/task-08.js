const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value;

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  if (emailValue === "" || passwordValue === "") {
    alert("Fill all the fields of form");
  } else {
    console.log(formData);
    event.currentTarget.reset();
  }
}
