import React from 'react';

// react-router
import {Link} from 'react-router-dom';

// material-ui
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// css
import styles from './Navbar.module.css';

// material-ui-styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Kovan
          </Typography>
          <div className={styles.linksContainer}>
            <Link to="/">Home</Link>
            <Link to="/technology">Technology</Link>
            <Link to="/team">Team</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/download">Download</Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
