import express from 'express';
import {
  submitProject,
  projectInfo,
  showcase,
  allProjects,
  approveProject
} from '../controllers/projectController.js';
import { protect, adminProtect, hydrateUser } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/submit', protect, submitProject);
router.get('/project/:projectId', hydrateUser, projectInfo);
router.get('/showcase', showcase);
router.get('/all-projects', adminProtect, allProjects);
router.post('/approve/:projectId', adminProtect, approveProject);

export default router;
