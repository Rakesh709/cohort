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

//console.log(p2);

const p1KaiString = JSON.stringify(p1);
//console.log(p1KaiString);


let p3=JSON.parse(p1KaiString)
//console.log(p3);


//---------------------------

const teas = {
    name:"lemon tea",
    type:"green"
}

console.log(teas.name)
console.log(teas["type"]);

teas.origin="assam"

teas.caffine="Medium"

delete teas.type

console.log("origin" in teas);

for(let key in teas){
    console.log(key+ ":"+ teas[key]);
    
}

const myTeas ={
    greenTea:{
        name:"Green Tea",
        cups:{
            one:"1",
            two:"2"
        }
    },
    balckTea:{
        name:"Black tea"
    }
}
myTeas.greenTea.cups=5
console.log(myTeas);


const teaCopt={
    ...myTeas
}
console.log(teaCopt);

//shallow copy only one layer ko copy krta hai 
//first level of copy not nested object 
// that is shallow copy 

const deepCopt = JSON.stringify(teaCopt)
let 