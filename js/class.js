class Person{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname
    }

    getFullName(){
        return `${this.fname} ${this.lname}`
    }
}

const p1= new Person("Rakesh","Kumar")
const p2= new Person("Pacific","prime")


console.log(p1.getFullName());
