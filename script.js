let loginBtn = document.querySelector("#login-btn");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = 12345678910;
  const pin = 1234;

  let numberInp = parseInt(document.querySelector("#number-input").value);
  let pinInp = parseInt(document.querySelector("#pin-input").value);

  if (numberInp === mobileNumber && pinInp === pin) {
      window.location.href = "./home.html";
  } else {
    alert("Invalid credentials")
  }

  console.log(numberInp, pinInp);
});
