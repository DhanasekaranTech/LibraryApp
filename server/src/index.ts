import express, { Application, Request, Response } from "express";
import { AppDataSource, checkConnection } from "./dbConfig";
import { userRoutes } from "./routes/userRouters";
//import * as dotenv from "dotenv";
import { adminRoutes } from "./routes/adminRouters";
import { authRoutes } from "./routes/authRouters";
import cors from 'cors'

//dotenv.config();
const app: Application = express();
const PORT = process.env.PORT || 9082;

// CORS configuration
const corsOptions = {
  origin: "http://localhost:5173", 
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/auth',authRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "successssss" });
});

app.listen(PORT, () => {
  console.log(`listening in port ${PORT}`);
  checkConnection();
});
