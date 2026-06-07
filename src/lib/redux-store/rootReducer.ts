import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "../features/auth/authSlice";
import { activitySlice } from "../features/activity/activitySlice";
import { planSlice } from "../features/plan/planSlice";




// import other slices here...

const appReducer = combineReducers({
  authApi: authSlice.reducer,
  activityApi: activitySlice.reducer,
  planApi: planSlice.reducer,

});

// Wrap in root reducer to handle RESET
export const rootReducer = (state: any, action: any) => {
  if (action.type === "RESET") {
    state = undefined; // clears ALL state including RTK Query cache
  }
  return appReducer(state, action);
};
