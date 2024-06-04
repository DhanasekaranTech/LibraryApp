import { adminMiddleware } from "../middleware/adminMiddleware";
import {
  viewUser,
  addNewBook,
  showbook,
  deletebook,
  deleteUB,
  updateUB,
  getUserBooks,
} from "../controllers/adminController";
import express from "express";

const router = express.Router();

router.get("/viewUser", adminMiddleware, viewUser);

router.get("/show", adminMiddleware, showbook);
router.post("/createBook", adminMiddleware, addNewBook);

router.delete("/deleteBook/:id", adminMiddleware, deletebook);

router.get("/userbooks", adminMiddleware, getUserBooks);
router.delete("/deleteUB/:id", adminMiddleware, deleteUB);
router.patch("/updateUB/:id", adminMiddleware, updateUB);

export { router as adminRoutes };
