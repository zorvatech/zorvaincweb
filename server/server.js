import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
dotenv.config();



const app = express();

const PORT = process.env.PORT || 3000;

connectDB()

app.use('/',(req , res )=>{
    res.send(`server runing `);
});



app.listen(PORT,()=>{
    console.log(`server runing on this url http://localhost:${PORT}`);
})