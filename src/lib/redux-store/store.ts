import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { rootReducer } from "./rootReducer";
import { authSlice } from "../features/auth/authSlice";
import { activitySlice } from "../features/activity/activitySlice";
import { planSlice } from "../features/plan/planSlice";


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authSlice.middleware)
      .concat(activitySlice.middleware)
      .concat(planSlice.middleware),



  devTools: process.env.NEXT_PUBLIC_MODE !== "production",
});

// Hooks (plain JS)
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
