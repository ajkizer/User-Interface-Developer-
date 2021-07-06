//modal
const btn = document.getElementsByClassName("signup-btn");
const modal = document.querySelector(".modalform");
const body = document.querySelector(".notmodal");
const closeBtn = document.querySelector(".close-window");

//names on about
const anthony = document.querySelector(".anthony");
const jean = document.querySelector(".jean");
const alex = document.querySelector(".alex");
const miguel = document.querySelector(".miguel");
const brian = document.querySelector(".brian");
const zach = document.querySelector(".zach");
const manny = document.querySelector(".manny");
const eric = document.querySelector(".eric");

//sign up buttons, top and bottom of page
btn[0].addEventListener("click", showModal);
btn[1].addEventListener("click", showModal);

//modal event listeners
closeBtn.addEventListener("click", closeWindow);
window.addEventListener("click", closeModal);

//modal functions
function showModal() {
  modal.style.display = "block";
  body.style.filter = "blur(10px)";
}

function closeWindow() {
  modal.style.display = "none";
  body.style.filter = "blur(0)";
}
function closeModal(e) {
  if (e.target == modal) {
    modal.style.display = "none";
    body.style.filter = "blur(0)";
  }
}

//about event listeners

//about functions
