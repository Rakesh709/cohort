console.log("Global execution context start");

var globalVaribale = "I am global varibale";

function flobalFunction(){
    console.log("I am inside function"); 
}

console.log(globalVaribale);

globalVaribale();

console.log("Global execution context end");
