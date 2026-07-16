// function getNum(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     })
// }

// async function demo() {
//     await getNum()
//     await getNum();
//     await getNum();
// }

let h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let num = Math.floor(Math.random * 5)+1;
            if(num>3){
                reject("promise rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("promise resolve");
        }, delay);

    })
}

async function demo() {
    try{
        await changeColor("red",1000);
        await changeColor("orange",1000);
        await changeColor("green",1000);
    }
    catch (err){
        console.log("error caught!");
        cons.log(err)
    }
    
}