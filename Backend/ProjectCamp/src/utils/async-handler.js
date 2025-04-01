//TODO : WE NEED LATER : 
// to avoid try and catch
// const asyncHandler = (requestHandler)=>{
//     return (req,res,next)=>{
//         Promise.resolve(requestHandler(req,res,next))
//                 .catch((err)=> next(err))
//     }
// }

// export {asyncHandler}

//this save try catch haar jagh nhi lagan hota hai 


function asyncHandler(requestHandler){
    // return "chaicode"
    return function(req,res,next){
        Promise.resolve(requestHandler(req,res,next))
               .catch(function(err){
                next(err)
               })
    }
}

export {asyncHandler}


// function test(req,res,next){
//         Promise.resolve()
//                .catch()
// }