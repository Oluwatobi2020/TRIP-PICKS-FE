import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../redux-store/customBaseQuery";
import { apiRoutes } from "../../../api/routes";

export const planSlice = createApi({
  reducerPath: "planApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    createPlan: builder.mutation({
      query: (credentials) => ({
        url: apiRoutes.createAPlan,
        method: "post",
        data: credentials,
        params: {},
      }),
    }),
    updatePlan: builder.mutation({
      query: (credentials) => ({
        url: apiRoutes.updateAPlan,
        method: "patch",
        data: credentials,
        params: {},
      }),
    }),
    fetchAllUserPlans: builder.query({
      query: (userId) => ({
        url: `${apiRoutes.getPlanById}/${userId}`,
        method: "get",
      }),
    }),
    fetchAPlanById: builder.query({
      query: (id) => ({
        url: `${apiRoutes.getPlanById}/${id}`,
        method: "get",
      }),
    }),
  }),
});

export const {
    useCreatePlanMutation,
    useUpdatePlanMutation,
    useFetchAPlanByIdQuery,
    useLazyFetchAPlanByIdQuery,
    useFetchAllUserPlansQuery
} = planSlice;
