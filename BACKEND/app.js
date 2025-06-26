import express from "express";
import {nanoid} from "nanoid";
import dotenv from "dotenv";
dotenv.config("./.env");
import connectDB from "./src/config/mongo.config.js";
import urlSchema from "./src/models/short_url.model.js"
import short_url from "./src/routes/short_url.route.js";
import auth_routes from "./src/routes/auth.routes.js";
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";
import { errorHandler } from "./src/utils/errorhandler.js";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/auth",auth_routes)
app.use("/api/create",short_url);

app.get("/:id",redirectFromShortUrl)

app.use(errorHandler)


app.listen(3000,()=>{
    connectDB();
    console.log("Server is running on http://localhost:3000");
})

