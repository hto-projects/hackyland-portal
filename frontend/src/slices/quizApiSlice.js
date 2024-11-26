import { apiSlice } from './apiSlice';
const QUIZ_URL = '/api/quiz';

export const quizApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    submitKeywords: builder.mutation({
      query: (data) => ({
        url: `${QUIZ_URL}/submit`,
        method: 'POST',
        body: data,
      })
    })
  })
});

export const {
  useSubmitKeywordsMutation
} = quizApiSlice;
