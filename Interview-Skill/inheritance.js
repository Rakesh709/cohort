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


// const fname = new String()
// fname__proto__= String.prototype


const p01= {
    xp1:"I am inside P1"
}

const p02= {
    xp2:"I am inside P2"
}

const p03= {
    xp3:"I am inside P3"
}