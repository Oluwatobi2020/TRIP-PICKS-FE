import React, { useRef } from "react";
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

interface DetailsModalProps {
  children: React.ReactNode;
  open: boolean;
  title?: string;
  subTitle?: string;
  onClose: (value: boolean) => void;
}

const DetailsModal = ({
  open,
  onClose,
  title,
  subTitle,
  children,
}: DetailsModalProps) => {
  const radioGroupRef = useRef<HTMLElement>(null);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={(_event, reason) => {
        if (reason === "escapeKeyDown" || reason === "backdropClick") return;
        onClose(false);
      }}
      maxWidth="sm"
      fullWidth
      slotProps={{
        transition: {
          onEntering: handleEntering,
        },
        paper: {
          sx: {
            borderRadius: "5px",
          },
        },
      }}
    >
      <Grid
        container
        sx={{
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          size={{ xs: 6, sm: 6, md: 6, lg: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  lg: "15px",
                  md: "15px",
                  sm: "20px",
                  xs: "20px",
                },
                textAlign: "left",
                fontWeight: 600,
                textTransform: "uppercase",
                color: "primary.main",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  lg: "1em",
                  md: "1em",
                  sm: "0.875em",
                  xs: "0.875em",
                },
                textAlign: "center",
                color: "paleBlue.main",
                width: "90%",
              }}
            >
              {subTitle}
            </Typography>
          </Stack>
        </Grid>
        <Grid
          size={{ xs: 6, sm: 6, md: 6, lg: 6 }}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            endIcon={
              <Icon
                icon="material-symbols:close-rounded"
                width={20}
                height={20}
                color="#000"
              />
            }
            sx={{fontSize:"15px", textTransform:"capitalize"}}
            onClick={() =>{
              onClose(false)
            }}
          >
            Close
          </Button>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center" }}>{children}</Box>
    </Dialog>
  );
};

export default DetailsModal;
