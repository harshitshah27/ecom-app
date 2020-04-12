import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FeatureCard from './FeaturesCard';
import {Grid} from '@material-ui/core';
import {Create} from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
    color: 'black',
    padding: '40px',
  },
});

export default function FeatureSection() {
  const classes = useStyles();

  return (
    <>
      <Grid container direction="row" justify="space-around">
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
    </>
  );
}
