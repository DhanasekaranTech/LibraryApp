import { Router } from "express";
import {
  viewBooks,
  borrowBook,
  viewBorrowedBooks,
  viewProfile,
  // signUp,
  // signIn,
} from "../controllers/userController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.get('/myProfile/:id',authMiddleware,viewProfile)
router.get("/books", authMiddleware, viewBooks);
router.post("/borrow", authMiddleware, borrowBook);
router.get("/borrowed", authMiddleware, viewBorrowedBooks);
// router.get("/borrowed/:id", authMiddleware, viewBorrowedBooks);


export { router as userRoutes };
