console.log("hello Re:codedededededededed");

const mainPage = document.getElementById("mainPage");
const createbtn = document.getElementById("ctrwallet");
const modal = document.getElementById("mymodal");
const closeButtons = document.getElementById("closeButtons");
const closeButtonss = document.getElementById("closeButtonss");

const walletPage = document.getElementById("wallet-page");
const createWallet2 = document.getElementById("btnctrwallet");
const descriptioninput = document.getElementById("desc")

createbtn.addEventListener("click", function () {
  mainPage.style.display = "none";
  modal.style.display = "block";
  // const currencyselec = document.getElementsByName('input[name="Currencyselector"]:checked');
  // console.log(currencyselec.value);
  // let new_Wallet = new Wallet ( unameval.value , descriptioninput.value, umoney.value, currencyselec.value  );
  console.log(uname.value);
});

closeButtons.addEventListener("click", function () {
  modal.style.display = "none";
  mainPage.style.display = "block";
});

closeButtonss.addEventListener("click", function () {
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
      function calculate() {
        if (document.getElementById("incomeButton").checked) {
          return parseInt(umoneyval.value) + parseInt(transaction.value);
        } else if (document.getElementById("expenseButton").checked) {
          return parseInt(umoneyval.value) - parseInt(transaction.value);
        }
      }
      
      console.log(typeof calculate());
      const notes = document.getElementById("transactionNote");
      const tags = document.getElementById("transactionTag");
      const divtrans = document.getElementById("wallet_transactions");
      function callulli() {
        const list = document.getElementById("unorderedlist");
          const list_item = document.createElement("li");
          list_item.innerHTML =`Your Balance is ${calculate()} and the Transaction was made at : ${new Date()}  ${notes.value} ${tags.value}`;
          list.appendChild(list_item);
      }
       callulli();
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

