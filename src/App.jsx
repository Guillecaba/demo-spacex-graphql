import React, { useState } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import { darkTheme, lightTheme } from './theme';
import ScrollIntoView from './components/ScrollIntoView';
import PastLaunches from './containers/PastLaunches';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

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
              <Route exact path="/" component={PastLaunches} />
            </Switch>
          </Paper>
        </ScrollIntoView>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
