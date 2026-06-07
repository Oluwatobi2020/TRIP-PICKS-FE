import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../redux-store/customBaseQuery";
import { apiRoutes } from "../../../api/routes";

export const activitySlice = createApi({
  reducerPath: "activityApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    fetchAllActivities: builder.query({
      query: (params) => ({
        url: apiRoutes.getAllActivities,
        method: "get",
        params,
      }),
    }),
    fetchActivityById: builder.query({
      query: (id) => ({
        url: `${apiRoutes.getAllActivitiesId}/${id}`,
        method: "get",
      }),
    }),

    activityToggleSave: builder.mutation({
      query: ({ userId, activityId }) => ({
        url: `${apiRoutes.toggleActivitySaving}/${userId}/${activityId}`,
        method: "post",
      }),
    }),
    fetchAllSavedActivities: builder.query({
      query: (userId) => ({
        url: `${apiRoutes.getAllUserSavedActivities}/${userId}`,
        method: "get",
      }),
    }),
  }),
});

export const {
  useFetchActivityByIdQuery,
  useFetchAllActivitiesQuery,
  useLazyFetchActivityByIdQuery,
  useLazyFetchAllActivitiesQuery,
  useActivityToggleSaveMutation,
  useFetchAllSavedActivitiesQuery
} = activitySlice;
