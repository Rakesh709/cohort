const obj1= {
    firstName:"Rakesh",
    lastName: "Kumar",
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    } 
}

const obj2= {
    firstName:"Pacific",
    lastName: "Prime",
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    } 
}

console.log(obj1.getFullName())