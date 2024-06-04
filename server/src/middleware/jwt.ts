import jwt from "jsonwebtoken";
import { UserDetails } from "../entities/userTable";

export const generateToken = (user: UserDetails): string => {
  return jwt.sign(
    { id: user.ID, role: user.role, name: user.username },
    "SECRET_KEY",
    { expiresIn: "2h" }
  );
};
