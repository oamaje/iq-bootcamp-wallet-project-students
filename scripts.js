console.log("hello Re:codedededededededed");

const mainPage = document.getElementById("mainPage");
const createbtn = document.getElementById("ctrwallet");
const modal = document.getElementById("mymodal");
const closeButtons = document.getElementById("closeButtons");
const closeButtonss = document.getElementById("closeButtonss");

const walletPage = document.getElementById("wallet-page");
const createWallet2 = document.getElementById("btnctrwallet");

createbtn.addEventListener("click", function () {
  mainPage.style.display = "none";
  modal.style.display = "block";
});

closeButtons.addEventListener("click", function () {
  // alert("testing");
  modal.style.display = "none";
  mainPage.style.display = "block";
});

closeButtonss.addEventListener("click", function () {
  // alert("testing");
  modal.style.display = "none";
  mainPage.style.display = "block";
});

createWallet2.addEventListener("click", function () {
  modal.style.display = "none";
  walletPage.style.display = "flex";

  const unameval = document.getElementById("uname");
  const walletpagename = document.getElementById("walletpagename");
  const umoneyval = document.getElementById("umoney");

  function getcurrency() {
    if (document.getElementById("usdd").checked) {
      return "$";
    } else if (document.getElementById("iraqiDinar").checked) {
      return "IQD";
    }
  }
  walletpagename.innerHTML = `${unameval.value} Wallet Balance: ${
    umoneyval.value
  } ${getcurrency()}`;

  const addtrans = document
    .getElementById("addTransaction")
    .addEventListener("click", function walletpg() {
      const transaction = document.getElementById("makeTransaction");
      const plus = document.getElementById("incomeButton");
      const minus = document.getElementById("expenseButton");
      const notes = document.getElementById("transactionNote");
      const tags = document.getElementById("transactionTag");
      const divtrans = document.getElementById("wallet_transactions");
      const transactionli = document.createElement("li");
      function calc() {
        if (plus == ture) {
          return "+";
        } else if (plus == false) {
          return "-";
        }
      }
      divtrans.innerHTML = `${umoneyval.value} ${calc()} ${transaction.value}`;
    });
});

makeTransaction;
class Wallet {
  constructor(name, description, balance, currency) {
    this.name = name;
    this.description = description;
    this.balance = balance;
    this.currency = currency;
  }
}
