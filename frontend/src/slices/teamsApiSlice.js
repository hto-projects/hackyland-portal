import { apiSlice } from './apiSlice';
const TEAMS_URL = '/api/teams';

export const teamsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    submitTeam: builder.mutation({
      query: (data) => ({
        url: `${TEAMS_URL}/submit`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Team', 'User', 'Project']
    }),
    teamInfo: builder.query({
      query: (teamId) => ({
        url: `${TEAMS_URL}/${teamId}`,
        method: 'GET',
      }),
      providesTags: ['Team']
    })
  })
});

export const {
  useSubmitTeamMutation,
  useTeamInfoQuery
} = teamsApiSlice;
