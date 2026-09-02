import express from "express";
import {userRegistration,getAllUsers,updateUserByID} from "../controller/User.controller.js"
const route=express.Router();
route.post("/",userRegistration);
route.get("/",getAllUsers);
route.put("/:id",updateUserByID);


export default route;