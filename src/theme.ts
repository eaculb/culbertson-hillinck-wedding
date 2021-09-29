import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles/createTheme" {
  interface Theme {
    appBarHeight: number;
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    appBarHeight?: number;
  }
}

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
      contrastText: "#fff",
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
      fontFamily: "karma, serif",
      fontWeight: 400,
      fontSize: "1.6rem",
    },
    subtitle2: {
      fontFamily: "karma, serif",
      fontWeight: 400,
      fontSize: "1.4rem",
    },
    body1: {
      fontFamily: "karma, serif",
      fontWeight: 300,
      fontSize: "1.6rem",
    },
    body2: {
      fontFamily: "karma, serif",
      fontWeight: 300,
      fontSize: "1.4rem",
    },
    button: {
      fontFamily: "karma, serif",
      fontWeight: 400,
      fontSize: "1.4rem",
      textTransform: "none",
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
  // Used for consistency in the app bar size
  appBarHeight: 64,
});

export default theme;
