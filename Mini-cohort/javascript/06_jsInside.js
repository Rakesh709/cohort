

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


