import asyncHandler from 'express-async-handler';
import Vote from '../models/voteModel.js';
import Project from '../models/projectModel.js';

const castVote = asyncHandler(async (req, res) => {
  const user = req.user;
  const { projectId } = req.body;
  const projectForVote = await Project.findOne({ projectId });

  if (!projectForVote) {
    res.status(400);
    throw new Error('Cannot find the project');
  }

  const userVotes = await Vote.find({ participantId: user.participantId });

  if (userVotes.length >= 5) {
    res.status(400);
    throw new Error('You are out of votes!');
  }

  if (projectForVote.teamId === user.teamId) {
    res.status(400);
    throw new Error('You cannot vote for a project submitted by your own team');
  }

  let castingVote;
  
  try {
    castingVote = await Vote.create({
      participantId: user.participantId,
      projectId,
    });
  } catch (e) {
    res.status(400);
    throw new Error(e);
  }
  
  if (!castingVote) {
    res.status(400);
    throw new Error('Invalid vote data');
  }

  const userVotesNow = await Vote.find({ participantId: user.participantId });

  res.status(201).json({
    message: `Your vote has been cast! You have ${5-userVotesNow.length} vote(s) left.`
  });
});

const removeVote = asyncHandler(async (req, res) => {
  const user = req.user;
  const { projectId } = req.body;
  const projectForVote = await Project.findOne({ projectId });

  if (!projectForVote) {
    res.status(400);
    throw new Error('Cannot find the project');
  }

  const userVoteForProject = await Vote.findOneAndDelete({ participantId: user.participantId, projectId });
  if (!userVoteForProject) {
    res.status(400);
    throw new Error('You have not voted for this project');
  }

  const userVotesNow = await Vote.find({ participantId: user.participantId });

  res.status(201).json({
    message: `Your vote has been removed! You have ${5-userVotesNow.length} vote(s) left.`
  });
});

const getMyVotes = asyncHandler(async (req, res) => {
  const user = req.user;
  const votes = await Vote.find({ participantId: user.participantId });
  res.json(votes);
});

export {
  castVote,
  removeVote,
  getMyVotes
};
