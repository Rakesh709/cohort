Function.prototype.describe= function(){
    console.log(`Function name is ${this.name}`); 
    //kon sai funcntion bula rha hai mujhe uskai naam
    //idher jo this hai kis function nai bulaya 
    //jisnai bulaya  this kai uskai 
    //this khuli gaye hoti hai jisnai bulaya uskai sath chali jati hai 
    //most interview 
}

function masalaTea(){
    return "hi"
}

function gingerTea(){
    return "hello"
}

function greet(name){
    //this is called paramter "parametr for placeholder"
    console.log(`My name is ${name}`);
    
}

// console.log(greet.describe());
// console.log(masalaTea.describe());
// console.log(gingerTea.describe());
// console.log(greet("rakesh"));
//                  here rakesh is argument


//2.----------------------------------------------

//function decelartion
function add(a,b){
    return a+b
}

//function expression
const substact= function(a,b){
    return a-b
}

//arrow function
const multiply = (a,b)=> a*b

//3.--------------------------------------


//first class function

//jaise number return hota hai waise bhi function bhi return kr skte hai -- > function and number mai anter nhi 

//eek function paramter mai pass bhi ho skta hai and return bhi aaskat hai 
function applyOperation(a,b,operation){
    return operation(a,b)
}

const result = applyOperation(5,4,(x,y)=>x/y)


//4.------------------
//tiffy function 

function createCounter(){
    let count=0;
    return function(){
        count++;
        return count
    }
}

const couter = createCounter();

//5-----------------
//iffi : ()()
(function(){
    console.log("Rakesh");
    
})()