import React, { useState } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollIntoView from './components/ScrollIntoView';
import PastLaunches from './containers/PastLaunches';
import LaunchDetail from './containers/LaunchDetail';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createMuiTheme({
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

  const lightTheme = createMuiTheme({
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

  const handleSwitchTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <MuiThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <ScrollIntoView>
          <Header handleTheme={handleSwitchTheme} darkMode={darkMode} />
          <Paper style={{ minHeight: '95vh', width: '100%' }}>
            <Switch>
              <Route exact path="/launch/:id" component={LaunchDetail} />
              <Route exact path="/home" component={PastLaunches} />
              <Route path="/" component={PastLaunches} />
            </Switch>
          </Paper>
        </ScrollIntoView>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
