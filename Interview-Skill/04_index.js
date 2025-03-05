console.log("Start of the script") //1

setTimeout(()=>{
    console.log("im inside the etTimeout");
    
},0) //4

Promise.resolve().then(()=>{  //3
    "This is microtask Queue"
})

console.log("End"); //2


//startvation 