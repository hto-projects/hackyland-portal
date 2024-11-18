import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import Team from '../models/teamModel.js';
import Project from '../models/projectModel.js';
import { v4 as uuidv4 } from 'uuid';

const submitProject = asyncHandler(async (req, res) => {
  const { projectName, projectDescription, artifactLink, projectThumbnail } = req.body;
  const user = req.user;

  if (!user.teamId) {
    res.status(404);
    throw new Error(':( you are not on a team :(');
  }

  if (!projectName || !projectDescription || !artifactLink) {
    res.status(400);
    throw new Error(':( please fill out all required fields :(');
  }

  const projectForTeam = await Project.findOne({ "teamId": user.teamId });
  if (projectForTeam) {
    res.status(400);
    throw new Error(':( your team has already submitted a project :(');
  }

  const newProjectId = uuidv4();
  const newProject = await Project.create({
    projectName,
    projectDescription,
    artifactLink,
    projectThumbnail,
    projectId: newProjectId,
    teamId: user.teamId
  });

  if (newProject) {
    res.status(201).json({
      message: `Project "${projectName}" submitted successfully`
    });
  } else {
    res.status(400);
    throw new Error('Invalid project data');
  }
});

const projectInfo = asyncHandler(async (req, res) => {
  const user = req.user;
  let project;
  let projectId = req.params.projectId;
  if (projectId === "ours") {
    if (!user.teamId) {
      res.status(404);
      throw new Error(':( you are not on a team :(');
    } else {
      project = await Project.findOne({ "teamId": user.teamId });
    }
  } else {
    try {
      project = await Project.findOne({ "projectId": projectId });
    } catch (e) {
      res.status(400);
      throw new Error(':( project not found :(');
    }
  }

  if (!project) {
    res.status(404);
    throw new Error('project not found');
  }

  res.status(200).json(project);
});

const showcase = asyncHandler(async (req, res) => {
  const projects = await Project.find({});
  res.status(200).json(projects);
});

export {
  submitProject,
  projectInfo,
  showcase
};
