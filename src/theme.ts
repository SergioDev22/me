import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    neon: {
      cyan: string;
      violet: string;
      pink: string;
    };
  }
  interface PaletteOptions {
    neon?: {
      cyan: string;
      violet: string;
      pink: string;
    };
  }
}

export const NEON = {
  cyan: "#22e8ff",
  violet: "#a855f7",
  pink: "#ff2fd0",
};

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: NEON.cyan },
    secondary: { main: NEON.violet },
    background: {
      default: "#05060f",
      paper: "#0b0d1c",
    },
    text: {
      primary: "#eef2ff",
      secondary: "#8b92b8",
    },
    neon: NEON,
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: '"Inter", "Space Grotesk", sans-serif',
    h1: { fontFamily: '"Orbitron", "Space Grotesk", sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Orbitron", "Space Grotesk", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    h4: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    h5: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    button: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, textTransform: "none" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 10, textTransform: "none" },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontFamily: '"JetBrains Mono", monospace', fontSize: "0.72rem" },
      },
    },
  },
});
