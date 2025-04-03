import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import cors from "cors";

import registerRouter from './routes/register.js';



const app = express()

// middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// config
dotenv.config();

// database config
connectDB();



//rest api
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', registerRouter);

//port
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Example app listening on ${PORT}`.bgCyan.white);
});