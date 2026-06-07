import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import BookingConfirmedGif from "@/assets/booking-confirmed.gif";
import Image from "next/image";

interface CancelReservationModalProps {
  children?: React.ReactNode;
  open: boolean;
  title?: string;
  subTitle?: string;
  onClose: (value: boolean) => void;
  [key: string]: any;
}

const CancelReservationModal = ({
  open,
  onClose,
  title,
  subTitle,
  //   children,
  ...props
}: CancelReservationModalProps) => {
  return (
    <>
      <Dialog
        open={open}
        // onClose={onClose}
        {...props}
        maxWidth={"sm"}
        // disableBackdropClose
        disableEscapeKeyDown
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "20px", // 👈 change this
          },
        }}
      >
        <Grid container sx={{width:"100%"}}>
          <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "0.5rem 0.5rem 0 0",
            }}
          >
            <Icon
              icon="material-symbols-light:cancel-outline"
              width="30"
              height="30"
              onClick={() => onClose(false)}
              style={{ cursor: "pointer" }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "0.5rem 0.5rem 0 0",
            }}
          >
            <Image
              src={BookingConfirmedGif}
              alt="booking-confirmed-gif"
              width={100}
              height={100}
            />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "1.5em", textAlign: "center", fontWeight: 500 }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.9em",
                  textAlign: "center",
                  color: "paleBlue.main",
                  width: "80%",
                }}
              >
                {subTitle}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};

export default CancelReservationModal;
