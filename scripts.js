console.log("hello Re:codedededededededed");

const mainPage = document.getElementById("mainPage");
const createbtn = document.getElementById("ctrwallet");
const modal = document.getElementById("mymodal");
const closeButtons = document.getElementById("closeButtons");
const closeButtonss = document.getElementById("closeButtonss");


const walletPage = document.getElementById("wallet-page");
const createWallet2 = document.getElementById("btnctrwallet");


createbtn.addEventListener("click", function(){
    mainPage.style.display = "none";
    modal.style.display  = "block";
});


closeButtons.addEventListener("click", function(){
  // alert("testing");
  modal.style.display = "none";
  mainPage.style.display = "block";  
});

closeButtonss.addEventListener("click", function(){
  // alert("testing");
  modal.style.display = "none";
  mainPage.style.display = "block";  
});


createWallet2.addEventListener("click", function(){
  modal.style.display = "none";
  walletPage.style.display = "block"; 
})



class Wallet {
  constructor(name, description, balance, currency){
    this.name = name;
    this.description = description;
    this.balance = balance;
    this.currency = currency;
  }

  
}