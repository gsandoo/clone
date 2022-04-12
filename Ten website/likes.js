const $hi =document.querySelector(".like")
const $hello =document.querySelector(".dislike")

const $hi2 =document.querySelector(".like2")
const $hello2 =document.querySelector(".dislike2")

const $hi3 =document.querySelector(".like3")
const $hello3 =document.querySelector(".dislike3")

const $hi4 =document.querySelector(".like4")
const $hello4 =document.querySelector(".dislike4")

function change(){
  $hi.style.zIndex="-1";
  $hello.style.zIndex="0"
  }
function changetwo(){
  $hi.style.zIndex="0";
  $hello.style.zIndex="-1"
}

function change2(){
    $hi2.style.zIndex="-1";
    $hello2.style.zIndex="0"
    }
  function changetwo2(){
    $hi2.style.zIndex="0";
    $hello2.style.zIndex="-1"
  }

  function change3(){
    $hi3.style.zIndex="-1";
    $hello3.style.zIndex="0"
    }
  function changetwo3(){
    $hi3.style.zIndex="0";
    $hello3.style.zIndex="-1"
  }

function change4(){
    $hi4.style.zIndex="-1";
    $hello4.style.zIndex="0"
    }
  function changetwo4(){
    $hi4.style.zIndex="0";
    $hello4.style.zIndex="-1"
  }
$hi.addEventListener("click",change);
$hello.addEventListener("click",changetwo);

$hi2.addEventListener("click",change2);
$hello2.addEventListener("click",changetwo2);

$hi3.addEventListener("click",change3);
$hello3.addEventListener("click",changetwo3);

$hi4.addEventListener("click",change4);
$hello4.addEventListener("click",changetwo4);
