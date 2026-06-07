"use client";

import { ThemeProvider, CssBaseline, GlobalStyles, Box } from "@mui/material";
import { theme } from "@/helpers/theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          "*": { scrollBehavior: "smooth" },
          "*::-webkit-scrollbar": {
            width: "6px",
            height: "6px",
            borderRadius: "8px",
            backgroundColor: "rgba(255,255,255,0.4)",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#999",
            borderRadius: "6px",
          },
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
}
