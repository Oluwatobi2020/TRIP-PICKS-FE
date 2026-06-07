import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import {

  axiosInstance,
} from "../../api/config";

type AxiosBaseQueryArgs = {
  url: string;
  method: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
  headers?: AxiosRequestConfig["headers"];
  responseType?: AxiosRequestConfig["responseType"];
};

type AxiosBaseQueryError = {
  status?: number;
  data: unknown;
};

export const axiosBaseQuery =
  (): BaseQueryFn<AxiosBaseQueryArgs, unknown, AxiosBaseQueryError> =>
  async ({ url, method, data, params, headers, responseType }) => {
    try {
      const result = await axiosInstance({
        url,
        method,
        data,
        params,
        headers,
        responseType,
      });

      return { data: result.data };
    } catch (error) {
      console.log("error in customBaseQuery", error)
      const err = error as AxiosError;


      return {
        error: {
          status: err.response?.status,
          data: err.response?.data ?? err.message,
        },
      };
    }
  };


