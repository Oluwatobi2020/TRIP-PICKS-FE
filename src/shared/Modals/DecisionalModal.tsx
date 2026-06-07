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

interface DecisionalModalProps {
  open: boolean;
  title?: string;
  subTitle?: string;
  actionButtonTitle?: string;
  onClose: (value: boolean) => void;
  performAction: () => void;
  [key: string]: any;
}

const DecisionalModal = ({
  open,
  onClose,
  title,
  subTitle,
  actionButtonTitle,
  performAction,
  ...props
}: DecisionalModalProps) => {
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
            padding: "1rem",
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
          <Grid size={{ xs: 9, sm: 9, md: 9, lg: 9 }}>
            <Stack>
              <Typography
                sx={{
                  fontSize: {
                    lg: "1.5em",
                    md: "1.5em",
                    sm: "1.1em",
                    xs: "1.1em",
                  },
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
            size={{ xs: 3, sm: 3, md: 3, lg: 3 }}
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
          sx={{ width: "100%", display: "flex", alignItems: "center" }}
        >
          <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                fontSize: "0.8em",
                color: "#000",
                fontWeight: 500,
                marginRight: "1rem",
              }}
              onClick={() => performAction()}
            >
              {actionButtonTitle}
            </Button>
            <Button
              sx={{
                fontSize: "0.8em",
                color: "#fff",
                fontWeight: 500,
                backgroundColor: "secondary.main",
              }}
              onClick={() => onClose(false)}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};

export default DecisionalModal;
