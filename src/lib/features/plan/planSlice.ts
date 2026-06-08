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
      query: ({credentials, planId}) => ({
        url: `${apiRoutes.updateAPlan}/${planId}`,
        method: "patch",
        data: credentials,
        params: {},
      }),
    }),
    fetchAllUserPlans: builder.query({
      query: () => ({
        url: apiRoutes.getAllPlans,
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
