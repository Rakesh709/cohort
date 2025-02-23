var name="Rakesh"
let fullNaam ="DDD"

const pi=  3.14;
//mostly used in prod
 
//all datatype in js is capital

let number =12  //Number
let name2 ="string" //String
let isTrue = true // Boolean
let nothing= null // Object return / Null 

//console.log(typeof nothing); //Object

let undefiened  = undefined
//console.log(typeof undefiened);  //undefined

let symbolVar = Symbol() //Symbol

// let bigInt = untill you create banging site

// Object ? 

let person= {
    //key:value
    name: "rakesh",
    age:13,
    isStudent:true
}

let num = "42";
//how to convert datatypes
let convertedNumber = Number(num) //standard
//console.log(convertedNumber); //42
//console.log(typeof convertedNumber); 

let convertedNumber2= +num //42
let convertedNumber3= parseInt(num) //NaN


//string

let str=123
let converetddStirng = String(str)


//Operation
//paranthesis is best always use it () BODMAS

//(4+(4-6)*3)

let a = 10
let b = 3

let sum = a+b;

//standered way of doing spacing linting pertier


let diffrence = a-b;

let product = a*b;
let quotient = a/b 
let remainder = a%b
let power = a**b

//operation

let x = 5;
let y = 1;

//console.log(z==y); // equal to
//console.log( x !=y); //not equal to

//console.log(x<=y); //true

//modules 

//intrensic -- > in Build

// console.log(Math.max(5,10));
// console.log(Math.min(5,10));
//console.log(Math.floor(Math.random(1,6)*10)-1);


//string

let firstName = "Rakesh"
let lastName = "Kumar"

let fullName = firstName +lastName //rakeshkumar
let fullName2 = firstName+ " " +lastName //rakesh kumar

let message = "Hello World"

console.log(message.length); //11
console.log(message.toUpperCase());
console.log(message.indexOf("H"));
console.log(message.slice(0,5));


let myName = "Rakesh"
let greeting = `Hello ${myName}`
console.log(greeting);
