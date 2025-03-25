
exports.add=function add(x,y){
    return x+y;
}

//this is name export
exports.sub=function sub(a,b){
    return a-b
}


// exports.add= add;
exports.rakesh="this is rakesh"



//default eek he ho skta hai 
//default 
// module.exports= function(){
//     console.log("this is default");
    
// }


module.exports={
    add,
    sub
}

//above is default export