"use client"
import { useLoader } from "@/hooks";
import { useActivityToggleSaveMutation, useFetchAllActivitiesQuery } from "@/lib/features/activity/activitySlice";
import { ActivityCard } from "@/shared/ActivityCard";
import ControlledTextField from "@/shared/ControlledComponents/ControlledTextField";
import NoData from "@/shared/NoData";
import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  Grid,
  Pagination,
  Typography,
  useTheme,
} from "@mui/material";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import { useState } from "react";

const HomePage = () => {
  const theme = useTheme();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      category: "",
      title: "",
      area: "",
      tag: "",
      pageNumber: 1,
      pageSize: 8,
    },
    onSubmit: () => {
      console.log("submit");
    },
  });

  const { data: activityData, isLoading:loadingActivityData, refetch:refetchActivities } = useFetchAllActivitiesQuery({
    category: formik.values.category,
    area: formik.values.area,
    title: formik.values.title,
    tag: formik.values.tag,
  });




  const rowsPerPage = formik.values.pageSize;

  const totalData = activityData?.length ?? 0;

  const pageCount = Math.ceil(Number(totalData) / rowsPerPage) || 1;

  const start = formik.values?.pageNumber * rowsPerPage + 1;
  const end = Math.min(formik.values?.pageNumber * rowsPerPage, totalData);

  const startIndex = (formik.values?.pageNumber - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const currentRows = activityData?.slice(startIndex, endIndex);

  const handleChange = (event: any, value: any) => {
    // setPage(value);
    formik.setFieldValue("pageNumber", value);
  };



  return (
    <Box sx={{ width: "100%", padding: "2rem" }}>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          spacing={1}
          sx={{ display: "flex", alignItems: "flex-start" }}
        >
          <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
            <ControlledTextField formik={formik} name="title" label="Title" />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
            <ControlledTextField
              formik={formik}
              name="category"
              label="Category"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
            <ControlledTextField formik={formik} name="area" label="Area" />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
            <ControlledTextField formik={formik} name="tag" label="Tag" />
          </Grid>
        </Grid>

        <Grid
          container
          sx={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Button
              sx={{
                backgroundColor: "secondary.main",
                fontSize: "0.8em",
                marginRight: "1rem",
              }}
              endIcon={<Icon icon="ri:search-line" width={14} height={14} />}
              onClick={() => formik.handleSubmit()}
            >
              Search
            </Button> */}
            <Button
              sx={{
                border: `1px solid ${theme.palette.secondary.main}`,
                fontSize: "0.8em",
                color: "secondary.main",
              }}
              endIcon={
                <Icon icon="system-uicons:reset" width={14} height={14} />
              }
              onClick={() => formik.resetForm()}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ width: "100%", paddingTop: "2rem" }}>
        {!loadingActivityData && currentRows?.length > 0 && (
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", alignItems: "flex-start" }}
          >
            {currentRows?.map((singleActivity: any) => {
              return (
                <Grid
                  size={{ xs: 12, sm: 12, md: 3, lg: 3 }}
                  key={singleActivity?.id}
                >
                  <Box>
                    <ActivityCard activity={singleActivity} width={300} refreshData={refetchActivities} />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        )}
        {currentRows?.length === 0 &&<Grid
          container
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NoData title="activtity" />
        </Grid>}
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingTop: "2rem",
        }}
      >
        <Grid
          container
          sx={{ width: "100%", display: "flex", alignItems: "center" }}
        >
          <Grid size={{ xs: 2, sm: 2, md: 2, lg: 2 }}>
            <Typography
              sx={{
                fontSize: "1em",
                color: "paleBlue.main",
                textAlign: "left",
              }}
            >
              {`Page ${formik.values?.pageNumber} of ${pageCount || 0}`}
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 10, sm: 10, md: 10, lg: 10 }}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginLeft: "-2rem",
            }}
          >
            <Pagination
              count={pageCount}
              page={formik.values.pageNumber}
              onChange={handleChange}
              variant="outlined"
              shape="rounded"
              color="primary"
              sx={{
                "& .MuiPaginationItem-root": {
                  backgroundColor: "#fff",
                  color: "#000",
                  border: "1px solid #000",
                },

                "& .MuiPaginationItem-root:hover": {
                  backgroundColor: "#f5f5f5",
                },

                "& .Mui-selected": {
                  backgroundColor: `${theme.palette.secondary.main} !important`,
                  color: "#fff !important",
                  border: `1px solid ${theme.palette.secondary.main}`,
                },

                "& .Mui-selected:hover": {
                  backgroundColor: "#1565c0 !important",
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
