import mongoose from 'mongoose';

const voteSchema = mongoose.Schema(
  {
    participantId: {
      type: String,
      required: true,
    },
    projectId: {
      type: String,
      required: true
    },
  }
);

const Vote = mongoose.model('Vote', voteSchema);

export default Vote;
