import { apiSlice } from './apiSlice';
const USERS_URL = '/api/users';

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['User']
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
      }),
      invalidatesTags: ['User']
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['User']
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['User']
    }),
    updateTeamForUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/update-team`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['User', 'Team']
    }),
    userInfo: builder.query({
      query: () => ({
        url: `${USERS_URL}/profile`,
        method: 'GET',
      }),
      providesTags: ['User']
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: `${USERS_URL}/all-users`,
        method: 'GET',
      }),
      providesTags: ['User']
    }),
    addParticipants: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/add-participants`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['User']
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useUserInfoQuery,
  useGetAllUsersQuery,
  useUpdateTeamForUserMutation,
  useAddParticipantsMutation,
} = usersApiSlice;
