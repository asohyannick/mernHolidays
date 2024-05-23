import express, {Request, Response, Application} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import 'dotenv/config';
import userRoute from './routes/users';
import authRoute from './routes/auth';
mongoose.connect(process.env.MONGO_URI as string);
const app:Application = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(cookieParser());
const port = process.env.PORT || 8000;
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.listen(() => { 
    console.log(`Server is running on port ${port}...`);
});
