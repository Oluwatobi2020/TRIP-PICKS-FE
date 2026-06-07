import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#1A56FF",
      contrastText: "#fff",
    },
    teritary: {
      main: "#F3F7FF",
    },
    green: {
      main: "#0CAF60",
    },
    error: {
      main: "#A83027",
    },
    // background: {
    //   default: "#FFF",
    //   paper: "#fff",
    // },
    black: {
      main: "#000000",
    },
    paleBlue: {
      main: "#525866",
      contrastText: "#FFFFFF",
    },
  },
  components: {
    MuiListItemButton: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
    // MuiAppBar: {
    //   styleOverrides: {
    //     colorPrimary: {
    //       backgroundColor: "#00000069",
    //       color: "#FFFFFF",
    //     },
    //   },
    // },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: "#FFFFFF",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          // background: "#FFFFFF",
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#525866",
          "&.Mui-checked": {
            color: "#335CFF",
          },
        },
      },
    },
  },

  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontWeight: 600,
      fontSize: "3em",
      lineHeight: 1.5,
      fontFamily: "Poppins, sans-serif",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.25em",
      lineHeight: 1.5,
      fontFamily: "Poppins, sans-serif",
    },
    h3: {
      fontWeight: 600,
      fontSize: "2em",
      lineHeight: 1.5,
      fontFamily: "Poppins, sans-serif",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.5em",
      lineHeight: 1.5,
      fontFamily: "Poppins, sans-serif",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.125em",
      lineHeight: 1.5,
      fontFamily: "Poppins, sans-serif",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1em",
      lineHeight: 1.5,
      fontFamily: "Poppins, sans-serif",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1em",
      lineHeight: 1.5,
      fontFamily: "Poppins, sans-serif",
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.875em",
      lineHeight: 1.6,
      fontFamily: "Poppins, sans-serif",
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: "1em",
      lineHeight: 1.75,
      fontFamily: "Poppins, sans-serif",
      letterSpacing: 0,
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "0.875em",
      lineHeight: 1.75,
      fontFamily: "Poppins, sans-serif",
      letterSpacing: 0,
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.75em",
      lineHeight: 1.6,
      fontFamily: "Poppins, sans-serif",
      letterSpacing: 0,
    },
    overline: {
      fontWeight: 600,
      fontSize: "0.75rem",
      lineHeight: 2.46,
      fontFamily: "Poppins, sans-serif",
      letterSpacing: "1px",
      textTransform: "uppercase",
    },
    button: {
      textTransform: "none",
      fontFamily: "Poppins, sans-serif",
    },
  },
});
