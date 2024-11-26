import { apiSlice } from './apiSlice';
const PROJECTS_URL = '/api/projects';

export const projectsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    submitProject: builder.mutation({
      query: (data) => ({
        url: `${PROJECTS_URL}/submit`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Project', 'User', 'Team', 'Vote']
    }),
    approveProject: builder.mutation({
      query: (projectId) => ({
        url: `${PROJECTS_URL}/approve/${projectId}`,
        method: 'POST',
      }),
      invalidatesTags: ['Project']
    }),
    projectInfo: builder.query({
      query: (projectId) => ({
        url: `${PROJECTS_URL}/project/${projectId}`,
        method: 'GET',
      }),
      providesTags: ['Project']
    }),
    showcase: builder.query({
      query: () => ({
        url: `${PROJECTS_URL}/showcase`,
        method: 'GET',
      }),
      providesTags: ['Project']
    }),
    allProjects: builder.query({
      query: () => ({
        url: `${PROJECTS_URL}/all-projects`,
        method: 'GET',
      }),
      providesTags: ['Project']
    })
  })
});

export const {
  useSubmitProjectMutation,
  useApproveProjectMutation,
  useProjectInfoQuery,
  useShowcaseQuery,
  useAllProjectsQuery
} = projectsApiSlice;
