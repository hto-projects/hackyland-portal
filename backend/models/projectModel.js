import mongoose from 'mongoose';

const projectSchema = mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    projectDescription: {
      type: String,
      required: true
    },
    artifactLink: {
      type: String,
      required: true
    },
    projectThumbnail: {
      type: String,
      required: false
    },
    projectId: {
      type: String,
      required: true
    },
    teamId: {
      type: String,
      required: true
    },
    projectStatus: {
      type: String,
      required: true,
      default: "unapproved"
    },
    approvalTime: {
      type: Date,
      required: false
    }
  }
);

const Project = mongoose.model('Project', projectSchema);

export default Project;
