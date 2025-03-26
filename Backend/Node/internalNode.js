const fs = require('fs'); //(top level code)

//scenario 1
setTimeout(()=>console.log("SetTimeout"),0); //2 execute

setImmediate(()=>console.log("Set Immediate"),0) //3 execute

console.log("Heelo"); //1 execute (top level code)


//scenario 2
setTimeout(()=>console.log("SetTimeout"),0); //2 execute

setImmediate(()=>console.log("Set Immediate"),0) //1 execute

// console.log("Heelo"); //1 execute


//senario3 

setTimeout(()=>console.log("SetTimeout"),0); 

setImmediate(()=>console.log("Set Immediate"),0)

fs.readFile('sample.txt','utf-8',function(err,data){
    setTimeout(()=>console.log("SetTimeout inside fs"),0); 

    setImmediate(()=>console.log(" Immediate indise fs 1"),0)
})

/*output 
hello
set Timeout
set Immediate
Immediate indise fs 1
etTimeout inside fs 
*/
