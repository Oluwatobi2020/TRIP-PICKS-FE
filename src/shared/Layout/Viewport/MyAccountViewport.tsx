import React from "react";
import Sidebar from "@/shared/Layout/MyAccountLayout/Sidebar";
import NavBar from "@/shared/Layout/TopNav";
import Box from "@mui/system/Box";
import { NavToggleProvider } from "@/context/NavToggleContext";
import { useMediaQuery, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PageHeader from "../MyAccountLayout/PageHeader";

const MyAccountViewport = ({
  children,
  swipeable,
  noContainer,
  title,
  icons,
}: any) => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <NavToggleProvider>
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        {!noContainer ? (
          <Box display="flex" flexDirection="column" width="100%">
            <NavBar />
            <Box
              sx={{
                flexGrow: 1,
                paddingTop: 2,
                overflow: "auto",
              }}
              maxWidth="xl"
            >
              <Grid
                container
                spacing={2}
                sx={{ display: "flex", justifyContent: "flex-start" }}
              >
                <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                  <Sidebar />
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 9, lg: 9 }}>
                  {/* <PageHeader title={title} icons={icons} /> */}

                  {children}
                </Grid>
              </Grid>
            </Box>
          </Box>
        ) : (
          <Box sx={{ flexGrow: 1 }}>{children}</Box>
        )}
      </Box>
    </NavToggleProvider>
  );
};

export default MyAccountViewport;
