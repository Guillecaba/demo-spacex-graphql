import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  background: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    textDecoration: 'none',
    color: theme.palette.primary,
    cursor: 'pointer',
  },
}));

const Header = ({ handleTheme, darkMode }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar color="default" position="static">
      <Toolbar>

        <Typography
          color="primary"
          onClick={() => {
            history.push('/');
          }}
          variant="h6"
          className={classes.title}
        >
          SpaceX
        </Typography>

        <IconButton
          onClick={handleTheme}
          edge="end"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          {darkMode ? (
            <Brightness7Icon color="primary" />
          ) : (
            <Brightness4Icon color="primary" />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
