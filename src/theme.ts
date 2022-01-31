import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles/createTheme" {
  interface Theme {
    appBarHeight: number;
    footerHeight: number;
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    appBarHeight?: number;
    footerHeight?: number;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    complementary?: PaletteColorOptions;
    dark?: PaletteColorOptions;
  }

  interface Palette {
    complementary: PaletteColor;
    dark: PaletteColor;
  }
}

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#C47B37",
      light: "#C98C53",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
      contrastText: "#1A1F2D",
    },
    complementary: {
      main: "#61846B",
      light: "#7A8C7F",
    },
    dark: {
      main: "#1A1F2D",
    },
    info: {
      main: "#A17D71",
    },
    background: {
      default: "#1A1F2D",
      // paper: "#FCE8DD",
    },
    text: {
      primary: "#fff",
    },
  },
  typography: {
    h1: {
      fontFamily: "adobe-caslon-pro, serif",
      fontWeight: 600,
      fontStyle: "italic",
      fontSize: "6rem",
    },
    h2: {
      fontFamily: "adobe-caslon-pro, serif",
      fontWeight: 600,
      fontStyle: "italic",
      fontSize: "4rem",
    },
    h3: {
      fontFamily: "adobe-caslon-pro, serif",
      fontWeight: 600,
      fontStyle: "italic",
      fontSize: "3rem",
    },
    h4: {
      fontFamily: "adobe-caslon-pro, serif",
      fontWeight: 600,
      fontStyle: "italic",
      fontSize: "2.2rem",
    },
    h5: {
      fontFamily: "adobe-caslon-pro, serif",
      fontWeight: 600,
      fontStyle: "italic",
      fontSize: "2rem",
    },
    h6: {
      fontFamily: "adobe-caslon-pro, serif",
      fontWeight: 600,
      fontStyle: "italic",
      fontSize: "1.8rem",
    },
    subtitle1: {
      fontFamily: "Crimson Text, serif",
      fontWeight: 600,
      fontSize: "1.6rem",
    },
    subtitle2: {
      fontFamily: "Crimson Text, serif",
      fontWeight: 600,
      fontSize: "1.4rem",
    },
    body1: {
      fontFamily: "Crimson Text, serif",
      fontWeight: 400,
      fontSize: "1.4rem",
    },
    body2: {
      fontFamily: "Crimson Text, serif",
      fontWeight: 400,
      fontSize: "1.2rem",
    },
    button: {
      fontFamily: "Crimson Text, serif",
      fontWeight: 400,
      fontSize: "1.2rem",
      textTransform: "none",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
    },
  },
  // Used for consistency in the app bar size
  appBarHeight: 72,
  footerHeight: 84,
});

export default theme;
