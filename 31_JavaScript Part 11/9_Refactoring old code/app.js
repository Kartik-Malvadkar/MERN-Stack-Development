let h1 = document.querySelector("h1");
function changeColor(color, delay) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!")
        }, delay);
    })

}
changeColor("red",1000)
.then(()=>{
    console.log("red color changed");
    return changeColor("orange",1000)
    })
    .then(()=>{
        console.log("orange color changed");
        return changeColor("yellow",1000)
})
.then(()=>{
        console.log("yellow color changed");
        return changeColor("pink",1000)
})

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("blue", 1000, () => {
//             changeColor("green", 1000, () => {
//                 changeColor("purple", 1000)
//             })
//         })
//     });
// })