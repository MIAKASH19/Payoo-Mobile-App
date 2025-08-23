let addBtn = document.querySelector("#add-btn");
let withdrawBtn = document.querySelector("#withdraw-btn");
let addMoneyBtn = document.querySelector("#add-money-btn");
let cashOutBtn = document.querySelector("#cash-out-btn");

let validpin = 1234;

// Add Money Feature
addBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let bankInp = parseInt(document.querySelector("#bank-acc-input").value);
  let pinInp = parseInt(document.querySelector("#pin-input").value);
  let amount = parseInt(document.querySelector("#amount-input").value);
  let balance = document.querySelector("#balance");

  if (bankInp.length < 11) {
    alert("Invalid Bank Account Number");
    return;
  }
  if (pinInp !== validpin) {
    alert("Invalid Pin Number");
    return;
  }

  let balanceValue = parseInt(document.querySelector("#balance").textContent);

  let totalBalance = balanceValue + amount;
  balance.textContent = totalBalance;
});

// CashOut Feature
withdrawBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let withdrawamount = parseInt(
    document.querySelector("#withdraw-amount").value
  );
  let balance = document.querySelector("#balance");
  let balanceValue = parseInt(document.querySelector("#balance").textContent);

  let remainBalance = balanceValue - withdrawamount;

  balance.textContent = remainBalance;
  console.log(withdrawamount);
});

// Toggle Feature
addMoneyBtn.addEventListener("click", function () {
  document.querySelector("#cash-out-parent").style.display = "none";
  document.querySelector("#add-money-parent").style.display = "block";
});

cashOutBtn.addEventListener("click", function () {
  document.querySelector("#add-money-parent").style.display = "none";
  document.querySelector("#cash-out-parent").style.display = "block";
});
