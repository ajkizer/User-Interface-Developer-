const btn = document.getElementsByClassName("signup-btn");

const modal = document.querySelector(".modalform");

const body = document.querySelector(".notmodal");

const closeBtn = document.querySelector(".close-window");

btn[0].addEventListener("click", showModal);
btn[1].addEventListener("click", showModal);

closeBtn.addEventListener("click", closeWindow);

window.addEventListener("click", closeModal);

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
