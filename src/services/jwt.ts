//@ts-nocheck
import jwt from 'jsonwebtoken';

export function generateToken(userData){ 
    const token = jwt.sign(userData , process.env.JWT_SECRET , {
        expiresIn : '1d'
    })
    return token;
}

export function verifyToken(token){
    const userData = jwt.verify(token , process.env.JWT_SECRET);
    return userData;
}