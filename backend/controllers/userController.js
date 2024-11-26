import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { participantId, password } = req.body;

  const user = await User.findOne({ participantId });
  if (!user) {
    res.status(401);
    throw new Error('Oh no! There is no one with that participant ID');
  }

  if (!user.password) {
    res.status(401);
    throw new Error('Oh no! Looks like you have not registered yet');
  }

  if (await user.matchPassword(password)) {
    generateToken(res, user._id);

    console.log(user);

    res.json({
      _id: user._id,
      name: user.name,
      participantId: user.participantId,
      teamId: user.teamId
    });
  } else {
    res.status(401);
    throw new Error('Oh no! wrong password. dang');
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, participantId, password } = req.body;
  console.log(participantId);

  const participantUser = await User.findOne({ participantId });

  if (!participantUser) {
    res.status(400);
    throw new Error('Oops! Looks like that participant ID does not exist (crying sad emoji)');
  }

  if (participantUser.password) {
    res.status(400);
    throw new Error('Oops! Looks like someone already registered with that participant id (angry crying emoji)');
  }

  participantUser.name = name;
  participantUser.password = password;

  const updatedUser = await participantUser.save();

  if (updatedUser) {
    generateToken(res, updatedUser._id);

    res.status(201).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      participantId: updatedUser.participantId,
      teamId: updatedUser.teamId
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    sameSite: "None",
    secure: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  console.log(user);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      participantId: user.participantId,
      teamId: user.teamId
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const getAllUsers = asyncHandler(async (req, res) => {
  if (!req.user.admin) {
    res.status(401);
    throw new Error('Not authorized, not an admin');
  }

  const users = await User.find({});

  res.json(users);
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  getAllUsers
};
