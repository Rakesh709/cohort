

const obj= {
    name:"Rakesh",
    greet: function(){
        console.log(`hello, ${this.name}`);
    // ager setTimeout mai isko call kia to undefined ayega Q ki jab than callback stack sa stack mai ayega thab thak obj kai scope nhi rhega 
    // access krne kai lia bind us kro  
    }
}

console.log("Hello from js");

setTimeout(obj.greet.bind(obj), 2*1000);
                      // Minimum to itna lagega

console.log("Bye Bye");


// what is starVation ?

//ager micro task ko khali na hone do to startvation ho jata hai


Promise.resolve().then(()=>{
    console.log("1. Promise resolve ho gya");
    
    Promise.resolve().then(()=>{
        console.log("2. Promise resolve ho gya");
        
        Promise.resolve().then(()=>{
            console.log("3. Promise resolve ho gya");
            
        })
    })
})

//https://www.jsv9000.app/ 

// HLD : HIGH LEVEL DESIGN --> UPPER UPPER SAI 
// LWD : LOW LEVEL DESIGN --> IN DEPTH

// KUCH KAI EVENT LOOP 

// KUCH KAI PROMISES --> POLYFILLS 


//Hoisting 

//let and const is hoisting but temperoral dead zone
// var --> hoisting hoti hai 