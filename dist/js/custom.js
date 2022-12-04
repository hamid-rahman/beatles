// hamid custom
// AOS Initialized 
AOS.init(
  {duration:1500}
);

//message
document.getElementById("popup").addEventListener("click", popupMsg);
      
function popupMsg() {
  alert ("It doesn't working. Check another one.");
}


// Rating Initialization
$(document).ready(function() {
  $('#rateMe1').mdbRate();
});



//second message
// document.getElementsById('popupSec').addEventListener("click",secMessage);
// function secMessage(){
//   alert ("This item not working. Check another one.");
// }