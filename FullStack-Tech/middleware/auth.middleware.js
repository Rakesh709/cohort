


export const isLoggledIn =(req, res, next)=>{
    try {
        console.log(req.cookies);

        let token = req.cookies?.token

        console.log("Token Found:", token ? "YES":"NO");

        
        
        
    } catch (error) {
        
    }
}