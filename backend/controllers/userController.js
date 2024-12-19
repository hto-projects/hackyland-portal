import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import Team from '../models/teamModel.js';
import generateToken from '../utils/generateToken.js';
import getNewParticipantId from '../utils/getNewParticipantId.js';

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

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      participantId: user.participantId,
      teamId: user.teamId,
      admin: user.admin
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const updateTeamForUser = asyncHandler(async (req, res) => {
  const { participantId, teamId } = req.body;
  
  const user = await User.findOne({ participantId });
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  if (!teamId) {
    user.teamId = null;
    try {
      await user.save();
      res.status(200).json({
        message: `${user.name || user.registeredName} (${user.participantId}) has been removed from their team!`
      });
    } catch (e) {
      res.status(400);
      throw new Error(e);
    }

    return;
  }

  const team = await Team.findOne({ teamId });
  const usersOnTeam = await User.find({ teamId });

  if (!team) {
    res.status(404);
    throw new Error('Team not found');
  }

  if (usersOnTeam.length >= 5) {
    res.status(400);
    throw new Error('Team is full');
  }

  user.teamId = team.teamId;

  try {
    await user.save();
    res.status(200).json({
      message: `${user.name || user.registeredName} (${user.participantId}) has been added to team ${team.teamName} (${team.teamId})!`
    });
  } catch (e) {
    res.status(400);
    throw new Error(e);
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

const addParticipants = asyncHandler(async (req, res) => {
  if (!req.user.admin) {
    res.status(401);
    throw new Error('Not authorized, not an admin');
  }

  const { participantNamesArray, addAdmins } = req.body;
  const addedUsers = [];

  try {
    for (let i = 0; i < participantNamesArray.length; i++) {
      const user = new User({
        registeredName: participantNamesArray[i],
        participantId: await getNewParticipantId(),
        admin: addAdmins
      });
  
      await user.save();
      addedUsers.push(user);
    }

    res.status(201).json({ message: 'Participants added successfully', addedUsers: addedUsers });
  } catch (e) {
    res.status(400);
    throw new Error(e);
  }
});  

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  getAllUsers,
  updateTeamForUser,
  addParticipants
};
