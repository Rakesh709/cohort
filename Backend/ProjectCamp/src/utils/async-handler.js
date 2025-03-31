//TODO : WE NEED LATER

const asyncHandler = (requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
                .catch((err)=> next(err))
    }
}

export {asyncHandler}

//this save try catch haar jagh nhi lagan hota hai 