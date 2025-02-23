let chaiTypes = ["masala chai" ," ginger chai", "green tea", "Leamo Tea" ]

console.log(chaiTypes[2]);
console.log(chaiTypes.length);

chaiTypes.push("Herbal Tea") // add at the end 

chaiTypes.pop() // remove the last element
//last element name will get the output

let index = chaiTypes.indexOf("green tea")

//interview q
if(index != -1){
    chaiTypes.splice(index,1)
}


chaiTypes.forEach((chai,index,array)=>{
        console.log(`${index+1} : ${chai}`);
        
})

let moreChai = ["Oolong tea "]

let allChaiType= chaiTypes.concat(moreChai)

let newChaiType = [...chaiTypes,"Chamoalio tea"]


//object literals


//Object

let chaiRecipe= {
    name:"Masal Chai",
    Ingeredient: {
        teaLeaves: "Assam Chai",
        milk:"Cream Milk",
        spices: ["Dallchini","Ginger"]
    },
    instruction:"Bioled water"

}

//console.log(chaiRecipe.Ingeredient.spices[1]);

let updatedChiaRecepie= {
    ...chaiRecipe,
    instruction:"Boil water, add tea leaves. ,milk, some love "
}

//console.log(updatedChiaRecepie);


let {name, Ingeredient} = chaiRecipe
//datatype object --> object destructure
//maping in object : sirf object mai hi kr skte hai 


let [firstChai, secondChai ] = chaiType
//array destructure
//sequence is fixed 
// let [value,setValue] = useState()


//Operations
