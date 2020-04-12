import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Call, Email, Place} from '@material-ui/icons';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: 'yellow',
    display: 'flex',
  },
  title: {
    fontSize: 14,
    color: 'black',
    padding: '40px',
  },
});

export default function ContactCard(props) {
  const {type} = props;
  const classes = useStyles();

  const getIconType = () => {
    switch (type) {
      case 'call':
        return <Call />;
      case 'email':
        return <Email />;
      case 'place':
        return <Place />;

      default:
        break;
    }
  };
  const getByText = () => {
    switch (type) {
      case 'call':
        return '847-939-9359';
      case 'email':
        return 'montreal@mail.com';
      case 'place':
        return '4116 Oak Avenue Chicago';
      default:
        return '';
    }
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container justify="center" spacing={2}>
          <Grid item>{getIconType()}</Grid>
          <Grid item>{getByText()}</Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
