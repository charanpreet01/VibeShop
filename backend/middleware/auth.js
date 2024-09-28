import jwt from "jsonwebtoken"

const authUser = async (req, res, next) => {
    
    const {token} = req.headers;

    if(!token){
        return res.json({success: false, msg: "Not Authorised, Login again!"});
    }

    try {

        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = tokenDecode.id;
        next();
        
    } catch (error) {
        console.log(error);
        res.json({success: false, msg: error.message});
    }

}

export default authUser;