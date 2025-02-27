function greet(name){
    console.log(`${name}`);
    
}

//greet("rakesh")

//from MDN


//imp interview
let golablVar ="I am Global"
//bahr goi bhi varibale hai function kai ander modefied kr skta hu


function modifyGlobal(){
    //ye modefied nhi hua hai
    golablVar= "I am Modified"
    let blockScopeVar = "I am blocked-scoped"
    console.log(blockScopeVar);
    console.log(golablVar);
    //here it is modefied
    
}

//modifyGlobal();

let config= function(){}()  // IFFI : BANDI HE EXECUTE HO GYA

// (()=>())()


    //Interview Q
let person1 ={
    name:"ravi",
    greet: function(){
        console.log(`hello ${this.name}`);
        
    }
}

let person2= {
    name:"Hitesh"
}

//person1 kai function run ho but property person2 kai ho 

person1.greet.call(person2); //hello Hitesh

const bindGreet= person1.greet.bind(person2); 

console.log(bindGreet());

//call -- call krt hai 
//bind : bind return new function
//apply : array rehta hai

//-----------------------Call & Bind------------

