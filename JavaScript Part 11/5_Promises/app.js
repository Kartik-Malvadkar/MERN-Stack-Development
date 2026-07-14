function saveToDB(data,success,failure){
    let internetSpeed = Math.floor(Math.random ()*10)+1;
    if(internetSpeed>5){
        success();
    }
    else{
        failure();
    }
}

saveToDB("kartik",()=>{
    console.log("Data Store successfully");
    saveToDB("Malvadkar",()=>{
        console.log("Second data store successfully");
    },()=>{
        console.log("error for second data");
    })
},()=>{
    console.log("Error for Data Store Unsuccessful");
});