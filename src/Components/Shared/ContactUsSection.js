import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ContactCard from './ContactCard';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: 'yellow',
    marginTop: '10px',
  },
  title: {
    fontSize: 14,
    color: 'black',
    padding: '40px',
  },
});

export default function ContactUsSection() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} justify="center" spacing={2}>
      <Grid item>
        <ContactCard type="call" />
      </Grid>
      <Grid item>
        <ContactCard type="email" />
      </Grid>
      <Grid item>
        <ContactCard type="place" />
      </Grid>
    </Grid>
  );
}
