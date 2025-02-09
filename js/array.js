//create a tea array
const teas = ["green tea","black tea", "oolangTea","white tea","herbal tea"]

teas.push("Cholia tea");

//remove oolong tea from the list

const index= teas.indexOf("oolangTea")
//console.log(index);

if(index>-1){
    teas.splice(index,1)
}

//filter the list tp only included teas are caggeinated 

const cafinated= teas.filter(tea=> tea !== "herbal tea");

// console.log(cafinated);

//sort the list of tea in alpahbetical order

const test=teas.sort()
//console.log(test);


//loops to print each type of tea in a array
for(let tea of teas){
    //console.log(tea);
    
}

for(let i=0; i<teas.length; i++){
    //console.log(teas[i]);
    
}

// count cafinated tea included herbal tea

let cafinatedMyTeas=0;
for(let i=0; i<teas.length; i++){
    if(teas[i] !=="herbal tea"){
        cafinatedMyTeas++
    }
    
}
//console.log(cafinatedMyTeas);

//all tea with upper case
const upCase= []
for(let i=0; i<teas.length; i++){
    upCase.push(teas[i].toUpperCase())
}
//console.log(upCase);

//loop to find the tea name with most character
let longestTea =""
for(let i=0; i<teas.length; i++){
    if(longestTea.length<teas[i].length){
        longestTea=teas[i]
    }
}
//console.log(longestTea);

//loop to reverse the order of teas in an array

let reversedArray=[]
for(let i=teas.length-1; i>=0; i--){
    reversedArray.push(teas[i])
}
console.log(reversedArray);
