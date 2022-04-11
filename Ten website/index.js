//모달 구현

const openButton = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const closeButton = modal.querySelector(".close");
const modalBackground = modal.querySelector(".modal__background");

function displayModal(){
    modal.classList.toggle("hidden");
}

openButton.addEventListener("click", displayModal);
closeButton.addEventListener("click", displayModal)
modalBackground.addEventListener("click", displayModal);