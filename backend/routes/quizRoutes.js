import express from 'express';
import {
  submitKeywords
} from '../controllers/quizController.js';

const router = express.Router();

router.post('/submit', submitKeywords);

export default router;
