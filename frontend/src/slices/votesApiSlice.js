import { apiSlice } from './apiSlice';
const VOTES_URL = '/api/vote';

export const votesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    castVote: builder.mutation({
      query: (data) => ({
        url: `${VOTES_URL}/cast`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Vote']
    }),
    removeVote: builder.mutation({
      query: (data) => ({
        url: `${VOTES_URL}/remove`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Vote']
    }),
    myVotes: builder.query({
      query: () => ({
        url: `${VOTES_URL}/all`,
        method: 'GET',
      }),
      providesTags: ['Vote']
    })
  }),
});

export const {
  useCastVoteMutation,
  useRemoveVoteMutation,
  useMyVotesQuery,
} = votesApiSlice;
