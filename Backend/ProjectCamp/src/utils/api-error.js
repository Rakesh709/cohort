
class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something went wrong",
        error =[],
        stack=""
    ){
        super(message);
        //ATLEST MSG IS REQUIRED
        this.statusCode = statusCode;
        this.message= message;
        this.succss = false;
        this.error = error;

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}