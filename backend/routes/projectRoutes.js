import express from 'express';
import {
  submitProject,
  projectInfo,
  showcase
} from '../controllers/projectController.js';
import { protect, hydrateUser } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/submit', protect, submitProject);
router.get('/project/:projectId', hydrateUser, projectInfo);
router.get('/showcase', showcase);

export default router;
