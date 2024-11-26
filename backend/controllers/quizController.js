import asyncHandler from 'express-async-handler';
import Quiz from '../models/quizModel.js';

const submitKeywords = asyncHandler(async (req, res) => {
  const { keywords } = req.body;
  const keyQuiz = await Quiz.findOne({ name: "Scavenger's Key" });

  if (!keyQuiz) {
    res.status(400);
    throw new Error('Cannot find the quiz');
  }

  const incorrectIdxs = [];

  for (let i = 0; i < keyQuiz.answers.length; i++) {
    if (keyQuiz.answers[i] !== keywords[i]) {
      incorrectIdxs.push(i);
    }
  }

  if (incorrectIdxs.length === 0) {
    res.status(200).json({message: `Congratulations! You have unlocked the Scavenger's Key. The combination is: ${keyQuiz.secret}`, incorrectIdxs});
  } else {
    res.status(200).json({message: `Oh no... not all keywords are correct.`, incorrectIdxs});
  }
});

export {
  submitKeywords,
};
