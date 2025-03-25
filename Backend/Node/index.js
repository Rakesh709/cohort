const fs = require("fs");
const math = require("./math.js")
fs.writeFile("./file.txt","hello world",()=>{})

console.log({__dirname,__filename});
console.log(math); //{}

console.log(math.rakesh);
console.log(math.add(1,2));
console.log(math());


function __require(id){
    //ager id . se shuru hua to user ki dir mai code ko dhundo
    //kud kai internal module mai dhundo
}