//@ts-nocheck
import jwt from "jsonwebtoken";

export function generateToken(userData: any) {
  const token = jwt.sign(userData, process.env.JWT_SECRET as string, {
    expiresIn: "7d",
  });
  return token;
}

type User = {
  email: string;
  id: string;
};
export function verifyToken(token: string) {
  const userData = jwt.verify(token, process.env.JWT_SECRET as string) as User;
  return userData;
}
