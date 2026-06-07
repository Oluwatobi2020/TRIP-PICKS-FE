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

interface LoginOptionsModalProps {
  children: React.ReactNode;
  open: boolean;
  title?: string;
  subTitle?: string;
  onClose: (value: boolean) => void;
  [key: string]: any;
}

const LoginOptionsModal = ({
  open,
  onClose,
  title,
  subTitle,
  children,
  ...props
}: LoginOptionsModalProps) => {
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
            alignItems: "flex start",
          }}
        >
          <Grid size={{ xs: 12, sm: 12, md: 9, lg: 9 }}>
            <Stack>
              <Typography
                sx={{
                  fontSize: "1.5em",
                  fontWeight: 500,
                  textAlign: "left",
                  color: "black.main",
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8em",
                  textAlign: "left",
                  color: "paleBlue.main",
                }}
              >
                {subTitle}
              </Typography>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 3, lg: 3 }}
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

        <Box sx={{ display: "flex", justifyContent: "center" }}>{children}</Box>
      </Dialog>
    </>
  );
};

export default LoginOptionsModal;
