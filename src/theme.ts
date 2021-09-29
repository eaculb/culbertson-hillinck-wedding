import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    complement?: PaletteColorOptions;
  }

  interface Palette {
    complement: PaletteColor;
  }
}

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#C47B37",
      light: "#C98C53",
      contrastText: "#1A1F2D",
    },
    secondary: {
      main: "#FCE8DD",
      contrastText: "#1A1F2D",
    },
    complement: {
      main: "#61846B",
      light: "#7A8C7F",
    },
    info: {
      main: "#A17D71",
    },
    background: {
      default: "#1A1F2D",
      paper: "#FCE8DD",
    },
    text: {
      primary: "#fff",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderWidth: "2px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderWidth: "2px",
          "&:hover": {
            borderWidth: "2px",
          },
        },
      },
    },
  },
});

export default theme;
