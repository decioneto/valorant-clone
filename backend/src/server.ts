import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import DBConnect from './database/db';
import routes from './routes/UserRoutes';

dotenv.config();

if (!process.env.PORT) {
    console.log('Error to get ports');
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

DBConnect();

app.listen(PORT, () => {
    console.log('💥 Server rodando');
});

app.get('/', (req, res) => {
    res.send('Helloooo you!');
});
