console.log("hello Re:codedededededededed");
//----- modal --------//


// Get the button that opens the modal


// Get the <span> element that closes the modal
// let span = document.getElementById("closebtn")[0];

// When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it

const mainPage = document.getElementById("mainPage");
const createbtn = document.getElementById("ctrwallet");
const modal = document.getElementById("mymodal");
const closeButtons = document.getElementsByClassName("closeButtons");


createbtn.addEventListener("click", function(){
    mainPage.style.display = "none";
    modal.style.display  = "block";
});


closeButtons.addEventListener("click", function(){
  modal.style.display = "none";
  mainPage.style.display = "block";
});