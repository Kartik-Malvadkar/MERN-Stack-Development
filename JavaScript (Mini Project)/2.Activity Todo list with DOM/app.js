let inp = document.querySelector("input");
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
 
let delbtns = document.querySelectorAll(".delete");
for(delbtn of delbtns){
    delbtn.addEventListener("click", function(){
        let par = li.parentclass
    })
}