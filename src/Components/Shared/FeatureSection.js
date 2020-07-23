import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import ProductList from '../../Assets/Products.json';
import ShoppingCard from './ShoppingCard';
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

  const product = ProductList.splice(0, 5);

  return (
    <>
      <Grid container className={classes.root} spacing={2} direction="row">
        {product.map((i) => {
          return (
            <Grid item>
              <ShoppingCard data={i} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
