import express from 'express';
import {
  submitTeam,
  teamInfo
} from '../controllers/teamController.js';
import { protect, hydrateUser } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/submit', protect, submitTeam);
router.get('/:teamId', hydrateUser, teamInfo);

export default router;
