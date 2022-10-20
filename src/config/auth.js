const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET

module.exports.success = async (req, res, next) => {
    // const token = req.header("x-auth-token");
    
    if (!req.cookies.token){ 
        return res.status(401).send("Please Login First!!..........");
    }

    const token = req.cookies.token.split(' ')[1];

    if(!token){
        return res.status(401).send("Please Login First!!..........");
    }

    try {
        const decoded = await jwt.verify(token, JWT_SECRET);
        // req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).send("invalid token");
    }
}
