import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heroContainer: {
    minHeight: '80vh',
    backgroundColor: 'yellow',
  },
  heroImgContainer: {
    backgroundColor: 'red',
  },
  heroContentContainer: {
    backgroundColor: 'blue',
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container sm={12}>
        <Grid container className={classes.heroContainer}>
          <Grid item sm={6} xs={12} className={classes.heroImgContainer}>
            PIC
          </Grid>
          <Grid item sm={6} xs={12} className={classes.heroContentContainer}>
            <main>
              <section>TEXT</section>
              <section>BUTTONS</section>
            </main>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
