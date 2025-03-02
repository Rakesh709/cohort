let arr =[1,2,3,4,5,6]

console.log(arr[-1]);
//undefined


//proxy concept
const user = {
    name: "Rakesh",
    age:12,
    password:"123"
}

const proxyUser = new Proxy(user,{
    get(targrt,prop){
        console.log(targrt); //{ name: 'Rakesh', age: 12, password: '
        //     123' }
        
        if(prop==="password"){
            throw new Error("Access Denied")
        }
        return targrt[prop]
    },
    set(targrt,prop,value){

    }
})
//above is custome proxy

//console.log(proxyUser.password); //123
//console.log(proxyUser.password); //Access denied

function negativeIndex(arr){
    return new Proxy(arr,{
        get(target,prop){
            const index = Number(prop)
            if(index<0){
                return [target.length+index]
            }
            return target[index]
        },
        set(target,prop,value){
            const index=  Number(prop)
            if(index<0){
                target[target.length+index] = value
            }else{
                target[index] = value
            }
            return true
        }
    })
}

let newArray = negativeIndex(arr)

console.log(newArray[-1]);
newArray[-1]=22
console.log(newArray);
console.log(arr);
