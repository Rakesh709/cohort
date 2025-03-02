//Lexical Scoping & Closures

let fname="Rakesh"
//ye closure mai

// let fname="Yogesh"
//Cannot redeclare block-scoped variable 'fname'.ts(2451)


function sayName(){
    let lname="Yogesh"
    // ye local mai 
    console.log("Inside value is ", fname,lname);
    
}

console.log("Value of Fname is", fname);

sayName()
