console.log("heekkiw")

const person={
    x:10,
    
}

console.log(person);

const remote= {
    color:"xyx",
    brand:"abc",
    columeUp:function(){
    }
}


let p1={
    firstName:"rakesh",
    lastName:"Kumar"
}

let p2={
    ...p1
}

console.log(p2);

const p1KaiString = JSON.stringify(p1);
console.log(p1KaiString);


let p3=JSON.parse(p1KaiString)
console.log(p3);
