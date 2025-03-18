import jwt from "jsonwebtoken"


export const isLoggedIn = async (req, res, next)=>{
    try {
        //token lao cookeis sai
        //check the token hai ya nhi
        //token sai data nikal do

        console.log(req.cookies);

        //truthy and falsy value 
        //ager cookies ahi to de do nhi to empty rehne do
        let token = req.cookies?.token

        console.log("Token Found:", token ? "YES":"NO");

        if(!token){
            console.log("No Token");
            return res.status(401).json({
                success:false,
                message:"Authentication failed"
            })            
        }

        //token sai data nikal na hai

      const decoded= await jwt.verify(token,process.env.JWT_SECRETE)
      console.log("decoded data:", decoded);
    
      req.user= decoded
      next();
    } catch (error) {
        console.log("Auth middleware failire");
        return res.status(500).json({
            success:false,
            message:"Internal server error"

        })
        
    }

    
}