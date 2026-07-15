async function greet() {
    return "hello";
}

greet()
.then((result)=>{
    console.log("resolve: ",result);
})
.catch((err)=>{
    console.log("reject:",err);
})

let demo = async ()=>{
    return 5;
}