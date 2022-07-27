const jwt = require('jsonwebtoken');
const pool = require('../database');

const verifyToken =  async (req, res, next) => {
    try {
        const token =  req.headers["x-access-token"];

        if(!token) return res.status(403).json({message: 'No Token Provided'})

        //Saber si el token es valido 
        const decode = jwt.verify(token, 'links-api')
        next()
    } catch (error) {
        //SI el token no es valido viene al catch
        return res.status(401).json({message: 'Unauthorized'});
    }
}


module.exports = verifyToken