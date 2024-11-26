import path from 'path';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import teamRoutes from './routes/teamRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import quizRoutes from './routes/quizRoutes.js';

const port = process.env.PORT || 5000;
const dbName = process.env.DB_NAME;
const frontEndUrl = process.env.FRONTEND_URL;

connectDB(dbName);

const app = express();

const corsOptions = {
  origin: frontEndUrl,
  optionsSuccessStatus: 200,
  credentials: true
}

console.log(frontEndUrl);
console.log(corsOptions);

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use('/api/teams/', teamRoutes);
app.use('/api/projects/', projectRoutes);
app.use('/api/quiz/', quizRoutes);

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
