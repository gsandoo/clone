const $modal = document.querySelector("#modal");
const $open = document.querySelector(".modal-open");
$open.addEventListener('click',modalOpen);

function modalOpen(){
    $modal.style.display='flex';
}