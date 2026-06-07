"use client";
import { useFetchAllSavedActivitiesQuery } from "@/lib/features/activity/activitySlice";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";

const SavedActivity = () => {
  const [user, setUser] = useState<any>(null);

  const { data: savedActivityData, refetch } =
    useFetchAllSavedActivitiesQuery(user?.id, {
      skip: !user?.id
    });
  console.log("savedActivityData", savedActivityData);

  // useEffect(() => {
  //   refetch();
  // }, []);

  useEffect(() => {
    const storedUserData = secureLocalStorage.getItem("userDetails");
    setUser(storedUserData);
  }, []);
  return (
    <Box sx={{ width: "100%", padding: "2rem" }}>
      <Grid container sx={{ width: "100%" }}>
        <Typography>Saved Activity</Typography>
      </Grid>
    </Box>
  );
};

export default SavedActivity;
