import express, { Application, Request, Response, json } from 'express';
import logics from './controllers/client.crontroller'; 
import cors from 'cors';

const app: Application = express();
app.use(json());
app.use(cors());

app.get("/trabalhoextensionista", (req: Request, res: Response) => {
    logics(req, res);
});


export default app;
