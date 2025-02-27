//steps to follow
//1. signature


if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(cb){
        for(let i=0; i<this.length; i++){
            cb(this[i],i)
        }
    }
}

let arr=[1,2,3]

arr.myForEach((value,index)=> value*2)