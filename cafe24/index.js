const text = document.querySelector('.further_text')

function furtherMoving (direction){
    if(direction==="top"){
        text.style.fontSize= '10vw';
        console.log("down")
    }
    else if (direction === "down"){
        text.style.fontSize = '7vw';
    }
};

function Scroll(){
    const prevScrollTop = 1;
    const nextScrollTop = window.scrollY ;
    if(nextScrollTop > prevScrollTop){
        furtherMoving("down");
        console.log("down")
    }else if(nextScrollTop<prevScrollTop){
        furtherMoving("top");
        console.log("top");
        nextScrollTop === prevScrollTop;
    }}
    
document.addEventListener('scroll',Scroll);