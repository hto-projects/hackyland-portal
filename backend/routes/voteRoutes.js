import express from 'express';
import {
  castVote,
  removeVote,
  getMyVotes
} from '../controllers/voteController.js';
import { protect, adminProtect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/cast', protect, castVote);
router.post('/remove', protect, removeVote);
router.get('/all', protect, getMyVotes);

export default router;
