import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../redux-store/customBaseQuery";
import { apiRoutes } from "../../../api/routes";

export const authSlice = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: apiRoutes.userLogin,
        method: "post",
        data: credentials,
        params: {},
      }),
    }),
    userRegistration: builder.mutation({
      query: (credentials) => ({
        url: apiRoutes.userRegister,
        method: "post",
        data: credentials,
        params: {},
      }),
    }),


  }),
});

export const {
  useLoginUserMutation,
  useUserRegistrationMutation
  
} = authSlice;
