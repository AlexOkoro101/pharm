import { createTheme } from '@mui/material';

const Theme = createTheme({
  typography: {
    fontFamily: 'Lexend, sans-serif'
  },
  palette: {
    navColor: {
      main: '#FFFFFF',
    },
    primary: {
      main: '#1374FC',
    },
    secondary: {
      main: '#F4F6F8',
    },
    textPrimary: {
      main: '#053F63'
    },
    textSecondary: {
      main: '#425B84',
    },
    iconColor: {
      main: '#1374FC',
    }
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    textSecondary: Palette["primary"];
  }
  interface PaletteOptions {
    textSecondary: PaletteOptions["primary"];
  }
  interface Palette {
    textPrimary: Palette["primary"];
  }
  interface PaletteOptions {
    textPrimary: PaletteOptions["primary"];
  }
  interface Palette {
    navColor: Palette["primary"];
  }
  interface PaletteOptions {
    navColor: PaletteOptions["primary"];
  }
  interface Palette {
    iconColor: Palette["primary"];
  }
  interface PaletteOptions {
    iconColor: PaletteOptions["primary"];
  }
}


export default Theme;