"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DataTable, type ColumnDef } from "../../shared/Tables/DataTable";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useFetchAllUserPlansQuery } from "@/lib/features/plan/planSlice";
import secureLocalStorage from "react-secure-storage";
import DetailsModal from "@/shared/Modals/DetailsModal";
import EditPlan from "./EditPlan";

interface PlansProps {
  id: number;
  name: string;
  date: string;
  note: string;
}

const Plans = () => {
  const router = useRouter();
  const [openViewModal, setOpenViewModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [details, setDetails] = useState<any>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { data: userPlans, isLoading: userPlansIsLoading, refetch:refetchPlans } =
    useFetchAllUserPlansQuery(null);

    console.log("userPlans", userPlans)

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    rowIndex: number,
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const planColumns: ColumnDef<PlansProps>[] = [
    { key: "fileId", header: "#", render: (_row, index) => index + 1 },
    {
      key: "name",
      header: "Name",
    },
    { key: "note", header: "Note", render:(row) => {
      return(
        <Typography sx={{fontSize:"1em"}}>{row?.note || "N/A"}</Typography>
      )
    } },
    {
      key: "date",
      header: "Date",
      render: (row) => dayjs(row.date).format("YYYY-MM-DD"),
    },
  ];

  const menuItemList = [

    {
      id: 1,
      title: "Edit",
      method: () =>{
        setOpenEditModal(true)
      } ,
    },

  ];

  useEffect(() => {
    const storedUserData = secureLocalStorage.getItem("userDetails");
    setUser(storedUserData);
  }, []);
  return (
    <Box sx={{ width: "100%", padding: "2rem" }}>
      <Box sx={{ width: "100%" }}>
        <Grid container sx={{ width: "100%", padding: "1rem 0" }}>
          <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              sx={{
                color: "#fff",
                backgroundColor: "secondary.main",
                fontSize: "0.8em",
              }}
              onClick={() => router.push("/plans/create-plan")}
            >
              Create A Plan
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <DataTable<PlansProps>
            data={userPlans?.data ?? []}
            columns={planColumns}
            // toolbar={toolbar}
            anchorEl={anchorEl}
            handleClick={handleClick}
            handleClose={handleClose}
            setDetails={setDetails}
            menuItemList={menuItemList}
          />
        </Grid>
      </Box>

      <DetailsModal open={openEditModal} onClose={setOpenEditModal} >
        <EditPlan details={details} refreshData={refetchPlans} closeModal={setOpenEditModal}  />
      </DetailsModal>
    </Box>
  );
};

export default Plans;
