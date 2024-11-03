import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./DataBase/ConnectDB.js";
import router from "./Routes/Router.js";
const server = express();
dotenv.config();
server.use(express.static("public"));
server.use(express.json());
server.use(urlencoded({ extended: true }));
server.use(cors());
server.use("/contact",router)
connectDB()
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log("listening on port http://localhost:" + process.env.PORT);
    });
  })
  .catch((err) => {
    console.error("DataBase connection failed", err);
  });
