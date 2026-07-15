function saveToDB(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("Success: Data saved ");
        }
        else {
            reject("Failure: Data not saved")
        }
    })
}

saveToDB("Kartik Malvadkar")
    .then((result) => {
        console.log("Resolve: Promise was resolved");
        console.log(result);
        return saveToDB("data2")
    }).then((result) => {
        console.log("Data2 was saved")
        console.log(result)
    })
    .catch((error) => {
        console.log("Rejected: Promise was rejeted")
        console.log(error)
    })