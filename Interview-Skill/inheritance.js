// in js everything is an object

const p1= {
    fanme:"Rakesh",
    lname:"kumar",
    getName(){
        return `${this.fanme},${this.lname}`
    },
    __proto__:{}
}

const p2= Object.create(p1)

//p2={
// __proto__:p1}

/*  
 Wrapper classs--> String , Number , Boolean



*/

