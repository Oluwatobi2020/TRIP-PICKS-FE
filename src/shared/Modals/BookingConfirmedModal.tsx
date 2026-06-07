import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import BookingConfirmedGif from "@/assets/booking-confirmed.gif";
import Image from "next/image";

interface BookingConfirmedModalProps {
  children: React.ReactNode;
  open: boolean;
  title?: string;
  subTitle?: string;
  onClose: (value: boolean) => void;
  [key: string]: any;
}

const BookingConfirmedModal = ({
  open,
  onClose,
  title,
  subTitle,
  children,
  ...props
}: BookingConfirmedModalProps) => {
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
                sx={{
                  fontSize: {
                    lg: "1.75em",
                    md: "1.75em",
                    sm: "1.375em",
                    xs: "1.375em",
                  },
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  fontSize: {lg:"1em", md:"1em", sm:"0.875em", xs:"0.875em"},
                  textAlign: "center",
                  color: "paleBlue.main",
                  width: {lg:"90%", md:"90%", sm:"90%", xs:"90%"},
                }}
              >
                {subTitle}
              </Typography>
            </Stack>
          </Grid>
          <Grid sx={{padding:"1rem 0"}}>
            <Divider/>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center" }}>{children}</Box>
      </Dialog>
    </>
  );
};

export default BookingConfirmedModal;
