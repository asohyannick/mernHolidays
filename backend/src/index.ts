import express, {Request, Response, Application} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
const app:Application = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(cookieParser());
const port = process.env.PORT || 5000;
app.get('/', (req:Request, res:Response) => {
    res.status(200).send("Api is working");
})
app.listen(() => {
    console.log(`Server is running on port ${port}...`);
});
