import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import Team from '../models/teamModel.js';
import Project from '../models/projectModel.js';
import { v4 as uuidv4 } from 'uuid';

// @desc    Submit a new team
// @route   POST /api/users/team
// @access  Private
const submitTeam = asyncHandler(async (req, res) => {
  const { teamName, participantIdsArray, workstationNumber } = req.body;
  const teamNameExists = await Team.findOne({ "teamName": teamName});
  const workstationTaken = await Team.findOne({ "workstationNumber": workstationNumber });

  if (teamNameExists) {
    res.status(400);
    throw new Error(':( that team name is already taken :(');
  }

  if (workstationTaken) {
    res.status(400);
    throw new Error(':( that workstation is already taken :(');
  }

  const foundParticipants = [];

  for (let i = 0; i < participantIdsArray.length; i++) {
    const foundParticipant = await User.findOne({ "participantId": participantIdsArray[i] });
    if (!foundParticipant) {
      res.status(400);
      throw new Error(`:( cannot find participant with ID ${participantIdsArray[i]} :(`);
    }

    if (foundParticipant.teamName) {
      res.status(400);
      throw new Error(`:( participant with ID ${participantIdsArray[i]} is already on a team :(`);
    }

    foundParticipants.push(foundParticipant);
  }

  if (foundParticipants.length > 5) {
    res.status(400);
    throw new Error(':( only 5 participants are allowed per team :(');
  }

  const newTeamId = uuidv4();
  const team = await Team.create({
    teamName: teamName,
    teamId: newTeamId,
    workstationNumber: workstationNumber
  });

  if (!team) {
    res.status(400);
    throw new Error('Invalid team data');
  }

  const teamMembers = [];

  for (let i = 0; i < foundParticipants.length; i++) {
    foundParticipants[i].teamId = newTeamId;
    const savedParticipant = await foundParticipants[i].save();
    if (!savedParticipant) {
      res.status(400);
      throw new Error('Invalid team data');
    }

    teamMembers.push(savedParticipant);
  }

  res.status(201).json({
    message: `Team "${teamName}" submitted with the following members: ${teamMembers.map(p => p.name || p.registeredName).join(", ")}`
  });
});

const getTeamData = asyncHandler(async (teamId) => {
  const team = await Team.findOne({ "teamId": teamId });
  if (!team) {
    throw new Error('Team not found');
  }

  const usersOnTeam = await User.find({ "teamId": teamId });
  const teamProject = await Project.findOne({ "teamId": teamId });
  return {
    teamName: team.teamName,
    teamBio: team.teamBio,
    workstationNumber: team.workstationNumber,
    members: usersOnTeam.map(u => u.name || u.registeredName),
    projectId: teamProject ? teamProject.projectId : null
  };
});

const teamInfo = asyncHandler(async (req, res) => {
  const user = req.user;
  let teamId = req.params.teamId;
  if (teamId === "mine") {
    if (!user.teamId) {
      res.status(404).send();
    } else {
      teamId = user.teamId;
    }
  }

  let teamData;

  try {
    teamData = await getTeamData(teamId);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
  
  res.status(200).json(teamData);
});

const getAllTeams = asyncHandler(async (req, res) => {
  const teams = await Team.find({});
  console.log(teams);
  const teamData = [];

  for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    teamData.push({
      teamId: team.teamId,
      workstationNumber: team.workstationNumber,
    });
  }

  res.status(200).json(teamData);
});

const updateTeamInfo = asyncHandler(async (req, res) => {
  const user = req.user;
  const teamId = user.teamId;
  const team = await Team.findOne({ "teamId": teamId });

  team.teamBio = req.body.teamBio;

  if (await team.save()) {
    res.status(201).json({
      message: "Team bio updated successfully"
    });
  } else {
    res.status(400);
    throw new Error('Invalid team data');
  }
});

export {
  submitTeam,
  teamInfo,
  updateTeamInfo,
  getAllTeams
};
