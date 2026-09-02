import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from "./Routes/userRoutes.js"
import morgan from 'morgan';
dotenv.config();



const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

connectDB()
app.use(morgan('dev'))
app.use('/helthy',(req , res )=>{
    res.send(`server runing `);
});


app.use("/api/users",userRoutes)

app.listen(PORT,()=>{
    console.log(`server runing on this url http://localhost:${PORT}`);
})