var elModalOpenButton = document.querySelector(".btn-link");
var elModal = document.querySelector(".modal");

elModalOpenButton.addEventListener("click", function(){
  elModal.classList.add("modal-show");
})


var elModalCloseButton = document.querySelector(".close-btn");

elModalCloseButton.addEventListener("click" , function (){
  elModal.classList.remove("modal-show");
})