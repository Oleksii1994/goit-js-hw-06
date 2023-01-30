const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email: mail,
    password,
  };

  if (mail === "" || password === "") {
    alert("Fill all the fields of form");
  } else {
    console.log(formData);
    event.currentTarget.reset();
  }
}

//   const formData = new FormData(event.currentTarget);

//   if (mail === "" || password === "") {
//     alert("Fill all the fields of form");
//   } else {
//     formData.forEach((value, key) => {
//       console.log(`${key}: ${value} `);
//       event.currentTarget.reset();
//     });
//   }
//   console.log(formData);
// }
