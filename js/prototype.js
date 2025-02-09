const arr=[1,2,3]


//dot operator object kai properties ko madat krta hai 

//polyfills--> backup function 

if(!Array.prototype.myForeach){
    Array.prototype.myForeach=function(userFn){
        const originalArr = this
        //current object ki taraf point krta hai 
        for(let i=0; i<originalArr.length; i++){
                userFn(originalArr[i],i)
        }



    }
}

if(!Array.prototype.myMap()){
    Array.prototype.myMap= function(){
        
    }
}



const arr2 =[1,2,3,4]

//error .map function does not exist on arr variable  ---> interview ask


//. forEach polyfils

//steps 
// real signature kay input - kya output : no return function input value , index

//call my fb for each value





arr2.myForeach(function(value, index){
    console.log(`value at index ${index}  is ${value}`);
    
})


//signture .map
//return ? --> new array , 