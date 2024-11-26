import mongoose from 'mongoose';

const quizSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    secret: {
      type: String,
      required: true
    },
    answers: [{
      type: String
    }],
  }
);

const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;
