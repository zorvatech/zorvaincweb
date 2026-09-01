import express from "express";
import {userRegistration,getAllUsers} from "../controller/User.controller.js"
const route=express.Router();
route.post("/",userRegistration);
route.get("/",getAllUsers);


export default route;