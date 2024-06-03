import jwt from "jsonwebtoken";
import { User } from "../entities/userTable";

export const generateToken = (user: User): string => {
  return jwt.sign({ id: user.ID, role:user.role, name:user.username  }, "SECRET_KEY", { expiresIn: "2h" });
};
