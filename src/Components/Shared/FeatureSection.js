import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FeatureCard from './FeaturesCard';
import {Grid, Button} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: '5%',
  },
  title: {
    fontSize: 14,
    color: 'black',
    padding: '40px',
  },
  buttonContainer: {
    border: '1px solid yellow',
    borderRadius: '15px',
    marginBottom: '10px',
    marginTop: '10px',
  },
  button: {
    color: 'black',
  },
});

export default function FeatureSection() {
  const classes = useStyles();

  const handleClick = () => {
    window.alert('Launch Project');
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-around"
        className={classes.root}>
        <Grid item>
          <FeatureCard
            title="design"
            subtext='"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...'
          />
        </Grid>
        <Grid item>
          <FeatureCard
            title="coding"
            subtext='"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."'
          />
        </Grid>
        <Grid item>
          <FeatureCard
            title="apps"
            subtext='"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."'
          />
        </Grid>
      </Grid>
      <Grid
        container
        justify="center"
        alignContent="center"
        alignItems="center"
        direction="row">
        <Grid item className={classes.buttonContainer}>
          <Button
            className={classes.button}
            disableElevation
            onClick={handleClick}>
            Launch Project Now
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
