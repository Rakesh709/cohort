
let x:number | boolean | string =30

let fname :string | null = 'Rakesh'

function add(x:number,y:number){
    return x+y
}

let result = add(1,2);


// build time error --> ts give error in build time

// run time error --> in js

interface User{
    firstname: string;
    lastname :string;

}


function createUser(user: {firstname:string;lastname?:string}){
    user.firstname
}


