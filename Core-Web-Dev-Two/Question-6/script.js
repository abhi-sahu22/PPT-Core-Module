var openModalBtn = document.getElementById("openModalBtn");
var modal = document.getElementById("modal");
var overlay = document.getElementById("overlay");
var closeButton = document.getElementsByClassName("close")[0];

// Opening the modal when the button is clicked
openModalBtn.addEventListener("click", function() {
  modal.style.display = "block";
  overlay.style.display = "block";
  document.body.style.overflow = "hidden"; 
});

// Closing the modal when the overlay is clicked
overlay.addEventListener("click", function() {
  modal.style.display = "none";
  overlay.style.display = "none";
  document.body.style.overflow = "auto"; 
});

// Closing the modal when the close button is clicked
closeButton.addEventListener("click", function() {
  modal.style.display = "none";
  overlay.style.display = "none";
  document.body.style.overflow = "auto"; 
});
