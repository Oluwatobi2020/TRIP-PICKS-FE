import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FooterImage from "@/assets/hotel-footer-pic.png";

const ReadyToBookYourStay = () => {
  return (
    <Box
      sx={{
        height: "70vh",
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
          url(${FooterImage.src})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Stack
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid sx={{ padding: "1rem 0" }}>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "2.2em",
                      md: "2.2em",
                      sm: "1.375em",
                      xs: "1.375em",
                    },
                    fontWeight: 500,
                    textAlign: "center",
                    color: "primary.main",
                  }}
                >
                  Ready to Book Your Stay?
                </Typography>
              </Grid>
              <Grid sx={{ padding: "1.25rem 0" }}>
                <Typography
                  sx={{
                    fontSize: {
                      sm: "1em",
                      xs: "1em",
                      md: "1.25em",
                      lg: "1.25em",
                    },
                    textAlign: "center",
                    color: "primary.main",
                  }}
                >
                  Start searching for hotels with flexible time slots in your
                  area
                </Typography>
              </Grid>
              <Grid
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  padding:"0.5625rem 0 1.25rem 0"
                }}
              >
                <Button
                  sx={{
                    fontSize: "0.8em",
                    color: "primary.main",
                    backgroundColor: "secondary.main",
                    width: { lg: "242px", md: "242px", sm: "200px", xs: "200px" },
                    borderRadius: "32px",
                    padding: {
                      lg: "1.25rem 4.375rem",
                      md: "1.25rem 4.375rem",
                      sm: "0.90625rem, 3.0625rem",
                      xs: "0.90625rem, 3.0625rem",
                    },
                  }}
                >
                  Search Hotel
                </Button>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ReadyToBookYourStay;
