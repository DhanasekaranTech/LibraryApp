import { Router } from "express";
import { signUp,signIn } from "../controllers/userController";

const router = Router();


router.post("/signup", signUp);
router.post("/signin", signIn);


export{
    router as authRoutes
}