import { apiSlice } from './apiSlice';
const PROJECTS_URL = '/api/projects';

export const projectsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    submitProject: builder.mutation({
      query: (data) => ({
        url: `${PROJECTS_URL}/submit`,
        method: 'POST',
        body: data,
      })
    }),
    projectInfo: builder.query({
      query: (projectId) => ({
        url: `${PROJECTS_URL}/project/${projectId}`,
        method: 'GET',
      })
    }),
    showcase: builder.query({
      query: () => ({
        url: `${PROJECTS_URL}/showcase`,
        method: 'GET',
      })
    })
  })
});

export const {
  useSubmitProjectMutation,
  useProjectInfoQuery,
  useShowcaseQuery
} = projectsApiSlice;
