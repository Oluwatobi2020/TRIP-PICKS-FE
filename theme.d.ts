// src/theme.d.ts
import "@mui/material/styles";

// Extend the default MUI palette to include custom colors
declare module "@mui/material/styles" {
  interface Palette {
    olive: Palette["primary"];
    black: Palette["primary"];
    paleBlue: Palette["primary"];
    teritary: Palette["primary"];
    green: Palette["primary"];
    error: Palette["primary"];
  }

  interface PaletteOptions {
    olive?: PaletteOptions["primary"];
    black?: PaletteOptions["primary"];
    paleBlue?: PaletteOptions["primary"];
    teritary?: PaletteOptions["primary"];
    green?: PaletteOptions["primary"];
    error?: PaletteOptions["primary"];
  }
}

// Also update the `color` prop for components like Button, Chip, etc.
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    olive: true;
    black: true;
    paleBlue: true;
    green:true
    error:true
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    olive: true;
    black: true;
    paleBlue: true;
    error: true;
  }
}

declare module "@mui/material/Avatar" {
  interface AvatarPropsColorOverrides {
    olive: true;
    black: true;
    paleBlue: true;
    error: true;
  }
}
