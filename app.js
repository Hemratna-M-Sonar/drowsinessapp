import express from "express";
import User from "./routers/User.js";
import cookieParser from "cookie-parser";
// import fileUpload from "express-fileupload";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(
//   fileUpload({
//     limits: { fileSize: 50 * 1024 * 1024 },
//     useTempFiles: true,
//   })
// );
app.use(cors());
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
  next(); 
})
app.use("/api/v1", User);

app.get("/", (req, res) => {
  res.send("Server is working");
});
app.post("/", (req, res) => {
  const info = req.body;
  console.log(info)
})