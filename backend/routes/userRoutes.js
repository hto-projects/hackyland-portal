import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  getAllUsers
} from '../controllers/userController.js';
import { protect, adminProtect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
  .route('/profile')
  .get(protect, getUserProfile);
router.get('/all-users', adminProtect, getAllUsers);

export default router;
