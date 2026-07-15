let h1 = document.querySelector("h1");
function changeColor(color, delay, nextColor){
    setTimeout(() => {
        h1.style.color = color;
        nextColor();
    }, delay);
}

changeColor("red", 1000,()=>{
    changeColor("orange",1000);
})