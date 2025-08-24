let validpin = 1234;
let validCoupon = "Aakash";
let transactionData = [];

// Function to Get Input Value Number
function getInputValueNumber(elem) {
  let element = document.querySelector(elem);
  let elementValue = element.value;
  let elementValueNumber = parseInt(elementValue);
  return elementValueNumber;
}

// Function to Get Elements
function getElement(elem) {
  let element = document.querySelector(elem);
  return element;
}

// Function to get Input Value
function getInputValue(elem) {
  let element = document.querySelector(elem);
  let elementValue = element.value;
  return elementValue;
}

// Function to get Input Value Text Content
function getInputValueTextContent(elem) {
  let elementTextContent = parseInt(document.querySelector(elem).textContent);
  return elementTextContent;
}

function setTextContent(value) {
  let balance = document.querySelector("#balance");
  balance.textContent = value;
}

// Add Money Feature
document.querySelector("#add-btn").addEventListener("click", function (e) {
  e.preventDefault();

  let bankInp = getInputValue("#bank-acc-input");
  let pinInp = getInputValueNumber("#pin-input");
  let amount = getInputValueNumber("#amount-input");

  if (amount <= 10) {
    alert("You cannot Add such kind of value")
    return;
  }
  if (bankInp.length < 11) {
    alert("Invalid Bank Account Number");
    return;
  }
  if (pinInp !== validpin) {
    alert("Invalid Pin Number");
    return;
  }

  let balanceValue = getInputValueTextContent("#balance");

  let totalBalance = balanceValue + amount;
  setTextContent(totalBalance);

  const data = {
    name: "Add Money",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);

  alert("Money Added Succesfully");
});

// CashOut Feature
document.querySelector("#withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  let withdrawamount = getInputValue("#withdraw-amount");
  let balanceValueTextContent = getInputValueTextContent("#balance");

  if (balanceValueTextContent < withdrawamount) {
    alert("You Cannot Withdraw, Balance is insufficient")
    return
  }

  let remainBalance = balanceValueTextContent - withdrawamount;

  setTextContent(remainBalance);
  const data = {
    name: "Cash Out Money",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);

  alert(`You have succesfully Withdraw $${withdrawamount}`);
});

// Transfer Money Feature
document.querySelector("#send-btn").addEventListener("click", function (e) {
  e.preventDefault();

  let userAcc = getInputValue("#user-acc-input");
  let pinInp = getInputValueNumber("#transfer-pin-input");
  let transferamount = getInputValueNumber("#transfer-amount");
  let balanceValueTextContent = getInputValueTextContent("#balance");

  if (balanceValueTextContent < transferamount) {
    alert("You Cannot Transfer, Balance is insufficient")
    return
  }
  if (userAcc.length < 11) {
    alert("User Account Should be At least 11 Numbers");
    return;
  }
  if (pinInp !== validpin) {
    alert("Your pin is incorrect");
    return;
  }

  let remainBalance = balanceValueTextContent - transferamount;

  setTextContent(remainBalance);
  const data = {
    name: "Transfer Money",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);

  alert(`You have succesfully Transfer $${transferamount}`);
});

// Bonus Feature
document
  .querySelector("#get-bonus-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    let bonusamount = 1000;
    let coupon = getInputValue("#coupon-input");

    if (coupon !== validCoupon) {
      alert("You Entered a Invalid Coupon");
      return;
    }
    alert("You Got $1000 Bonus");

    let balanceValue = getInputValueTextContent("#balance");

    let totalBalance = balanceValue + bonusamount;
    setTextContent(totalBalance);

    const data = {
      name: "Bonus",
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
  });

// Paybill Feature
document.querySelector("#pay-btn").addEventListener("click", function (e) {
  e.preventDefault();

  let billSector = getInputValue("#bill-sector");
  let billerAccInp = getInputValue("#biller-acc");
  let pinInp = getInputValueNumber("#bill-pin");
  let paymentamount = getInputValue("#payment-amount");
  let balanceValueTextContent = getInputValueTextContent("#balance");

  if (balanceValueTextContent < paymentamount) {
    alert("You Cannot Pay, Balance is insufficient")
    return
  }

  if (billerAccInp.length < 11) {
    alert("Biller Account Must Contains At least of 11 Characters");
    return;
  }
  if (pinInp !== validpin) {
    alert("Your Pin is Incorrect");
    return;
  }

  let remainBalance = balanceValueTextContent - paymentamount;

  setTextContent(remainBalance);

  const data = {
    name: billSector,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);

  alert(`You have succesfully Pay  $${paymentamount}`);
});

// Transaction Features
getElement("#transaction-btn").addEventListener("click", function () {
  let CardsContainer = document.querySelector(".cards-container");
  CardsContainer.innerText = "";

  for (const data of transactionData) {
    const div = document.createElement("div");
    div.innerHTML = `<div
            class="bg-white p-3 rounded-xl flex items-center justify-between mt-3"
          >
            <div class="flex items-center w-fit gap-2">
              <div
                class="bg-[#F4F5F7] rounded-4xl w-fit p-2 flex items-center justify-center"
              >
                <img src="./assets/wallet1.png" alt="" />
              </div>
              <div>
                <h3 class="text-sm">${data.name}</h3>
                <p class="text-[10px] text-gray-500">${data.date} ${data.time}</p>
              </div>
            </div>
            <i class="ri-more-2-fill"></i>
          </div>`;

    CardsContainer.appendChild(div);
  }
});

// Handling Toggling Feature
function handleToggle(elem) {
  let forms = document.querySelectorAll(".forms");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.querySelector(elem).style.display = "block";
}

// Handling Color Toggling Feature
function handleButtonToggle(elem) {
  let formBtns = document.querySelectorAll(".formBtns");
  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document.querySelector(elem).classList.remove("border-gray-300");
  document
    .querySelector(elem)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// Toggle Feature
getElement("#add-money-btn").addEventListener("click", function () {
  handleToggle("#add-money-parent");
  handleButtonToggle("#add-money-btn");
});

getElement("#cash-out-btn").addEventListener("click", function () {
  handleToggle("#cash-out-parent");
  handleButtonToggle("#cash-out-btn");
});
getElement("#transfer-btn").addEventListener("click", function () {
  handleToggle("#transfer-parent");
  handleButtonToggle("#transfer-btn");
});
getElement("#bonus-btn").addEventListener("click", function () {
  handleToggle("#bonus-parent");
  handleButtonToggle("#bonus-btn");
});
getElement("#bill-btn").addEventListener("click", function () {
  handleToggle("#paybill-parent");
  handleButtonToggle("#bill-btn");
});
getElement("#transaction-btn").addEventListener("click", function () {
  handleToggle("#transaction-parent");
  handleButtonToggle("#transaction-btn");
});
