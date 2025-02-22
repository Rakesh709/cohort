


















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
