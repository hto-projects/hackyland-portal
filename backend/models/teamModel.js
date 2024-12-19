import mongoose from 'mongoose';

const teamSchema = mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
      unique: true
    },
    teamBio: {
      type: String,
      required: false
    },
    workstationNumber: {
      type: Number,
      required: true,
      unique: true
    },
    teamId: {
      type: String,
      required: true,
      unique: true
    }
  }
);

const Team = mongoose.model('Team', teamSchema);

export default Team;
