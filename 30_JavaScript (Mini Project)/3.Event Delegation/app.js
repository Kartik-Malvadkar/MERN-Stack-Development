let inp = document.querySelector("#inp");
let btn = document.querySelector("button");
let ul = document.querySelector("ul"); 

btn.addEventListener("click", function(){
    let li = document.createElement("li");
    li.innerText = inp.value; 
    inp.value = "";
    let delbtn = document.createElement("button");
    delbtn.classList.add("delbtn");
    delbtn.innerText = "Delete"
    ul.appendChild(li);
    li.appendChild(delbtn);
    
})
 
ul.addEventListener("click", function(event){
   if(event.target.nodeName == 'BUTTON'){
    console.log("Delete Items");
    let listItems = event.target.parentElement;
    listItems.remove();
   }
})

// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par)
//         par.remov();
//     })
// }