import { ApiResponse} from "../utils/api-response.js"


const healthCheck = async (req,res)=>{

    try {
        res.status(200).json(
            new ApiResponse(200,{message:"Server is running"})
        )
    } catch (error) {
        console.log("Error in DB",error)
    }
    
}

export {healthCheck};

//no link between express then how we use req, res --> because function kai signature ham ko pata hai