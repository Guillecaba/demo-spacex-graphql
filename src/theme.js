import { createMuiTheme } from '@material-ui/core/styles';

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#e1504d',
    },
    secondary: {
      main: '#fff',
    },
    error: {
      main: '#e1504d',
    },
    text: {
      primary: '#fff',
    },
    grey: {
      main: '#909090',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
});

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#309E43',
    },
    secondary: {
      main: '#fff',
    },
    error: {
      main: '#e1504d',
    },
    text: {
      primary: '#1c212f',
    },
    grey: {
      main: '#909090',
    },
    background: {
      default: '#fff',
      paper: '#f3f4f6',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
});
