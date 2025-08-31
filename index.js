import {connectDB} from "./db/db.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { fetch_Complaints, getComplaint, login } from "./controller/Complaint.controller.js";
import cookieParser from "cookie-parser";
import auth from "./middleware/auth.js";

dotenv.config();

const app = express();
app.use(cors({ origin: true, credentials: true }));
const PORT = process.env.PORT || 5000;
connectDB();

app.use(express.json()); // <-- Add this line
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.post("/add", getComplaint);
app.get("/fetch",auth, fetch_Complaints);
app.post("/login", login);

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
})