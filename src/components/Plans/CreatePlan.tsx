"use client";
import { useLoader } from "@/hooks";
import { useFetchAllSavedActivitiesQuery } from "@/lib/features/activity/activitySlice";
import { useCreatePlanMutation } from "@/lib/features/plan/planSlice";
import ControlledMultiSelect from "@/shared/ControlledComponents/ControlledMultiSelect";
import ControlledTextField from "@/shared/ControlledComponents/ControlledTextField";
import MultiLineTextField from "@/shared/ControlledComponents/MultiLineTextField";
import { Icon } from "@iconify/react";
import { Box, Button, Grid } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import * as Yup from "yup";

const CreatePlan = () => {
  const router = useRouter();
  const { displayLoader, hideLoader } = useLoader();
  const { enqueueSnackbar } = useSnackbar();

  const [createPlan] = useCreatePlanMutation();

  const handleCreatePlan = async (values: any) => {
    try {
      displayLoader();
      const createRes = await createPlan(values).unwrap();
      console.log("createRes", createRes);
      enqueueSnackbar("Plan created successfully!", {
        anchorOrigin: { vertical: "top", horizontal: "right" },
        autoHideDuration: 2500,
        preventDuplicate: true,
        variant: "success",
      });
      formik.resetForm()
    } catch (error) {
      console.log("error", error);
      enqueueSnackbar("An error encountered", {
        anchorOrigin: { vertical: "top", horizontal: "right" },
        autoHideDuration: 2500,
        preventDuplicate: true,
        variant: "error",
      });
    } finally {
      hideLoader();
    }
  };
  const [user, setUser] = useState<any>(null);
  console.log("user iiid", user);

  const { data: savedActivityData, refetch } = useFetchAllSavedActivitiesQuery(
    user?.id,
    {
      skip: !user?.id,
    },
  );
  console.log("savedActivityData", savedActivityData);

  // useEffect(() => {
  //   refetch();
  // }, []);

  useEffect(() => {
    const storedUserData = secureLocalStorage.getItem("userDetails");
    setUser(storedUserData);
  }, []);
  const validationSchema = Yup.object({
    name: Yup.string().trim().required("Name is required"),

    date: Yup.date()
      .required("Date is required")
      .typeError("Please select a valid date"),

    activityIds: Yup.array()
      .min(1, "Please select at least one activity")
      .required("Activities are required"),

    note: Yup.string().trim().max(500, "Note cannot exceed 500 characters"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      date: "",
      activityIds: [],
      note: "",
    },
    validationSchema,
    onSubmit: handleCreatePlan,
  });

  const savedActivitiesOptions =
    savedActivityData?.data?.map((singleItem: any) => {
      return {
        label: singleItem?.title,
        value: singleItem?.id,
      };
    }) ?? [];

  return (
    <Box sx={{ width: "100%", padding: "2rem" }}>
      <Box sx={{ width: "100%" }}>
        <Grid container>
          <Grid sx={{ paddingBottom: "1rem" }}>
            <Button
              startIcon={
                <Icon icon="material-symbols:arrow-back-rounded" color="#000" />
              }
              sx={{ mb: 3, color: "#000" }}
              onClick={() => router.back()}
            >
              Back
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          sx={{ width: "100%", display: "flex", alignItems: "flex-start" }}
        >
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
            <ControlledTextField
              formik={formik}
              name="name"
              label="Name"
              placeholder="Enter name"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
            <ControlledTextField
              formik={formik}
              name="date"
              label="Date"
              placeholder="Select date"
              type="date"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
            <ControlledMultiSelect
              formik={formik}
              name="activityIds"
              label="Select Saved Activities"
              placeholder="Select Activities"
              options={savedActivitiesOptions}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <MultiLineTextField
              formik={formik}
              name="note"
              label="Note (optional)"
              placeholder="Add a note here"
            />
          </Grid>
        </Grid>
        <Grid container sx={{ width: "100%", paddingTop: "1rem" }}>
          <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                fontSize: "0.8em",
                backgroundColor: "secondary.main",
                colot: "#fff",
              }}
              onClick={() => formik.handleSubmit()}
            >
              Create Plan
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CreatePlan;
