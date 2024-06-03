import { DataSource } from "typeorm";
import { User} from "./entities/userTable"
import { Book } from "./entities/bookTable";
import{UserBook} from "./entities/userBookTable"
import path from "path";
//import { config } from "dotenv";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "LibApp",
  synchronize: false,
  logging: true,
  entities: [path.join(process.cwd(), "src/entities/*.ts")],
  migrations: ["src/migrations/**/*.ts"],
  subscribers: [],
});

export const checkConnection = async () => {
  try {
    await AppDataSource.initialize();
    console.log("db connected successfully");
  } catch (error) {
    
    console.log("cannot connect to db",error);
  }
};
