function saveToDB(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){ 
            resolve("Success: Data saved ");
        }
        else{
            reject("Failure: Data not saved")
        }
    })
}

let request = saveToDB("Kartik Malvadkar"); // promise object
request.then(()=>{
    console.log("Resolve: Promise was resolved");
})
.catch(()=>{
    console.log("Rejected: Promise was rejeted")
})