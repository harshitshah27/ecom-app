import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Button, Grid} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  modal: {
    width: 630,
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const {children, classes, onClose, ...other} = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function CartModal(props) {
  const {open, close, cartArray, classes} = props;
  console.log('cartArray', cartArray);
  return (
    <>
      <Dialog onClose={() => close()} open={open} maxWidth="lg">
        <DialogTitle onClose={() => close()}>Your Cart</DialogTitle>
        <DialogContent dividers className={classes.modal}>
          <Grid container justify="space-between" direction="row">
            <Grid item>
              <Typography gutterBottom variant="h6">
                Item Name
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h6">
                Amount
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="space-between" direction="column">
            {cartArray.map((item) => {
              return (
                <>
                  <Grid container justify="space-between" direction="row">
                    <Grid item>
                      <Typography gutterBottom>{item.item}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom>{item.price}</Typography>
                    </Grid>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              close();
              window.alert('Order Placed Successfully');
            }}
            color="primary">
            Place Order
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cartArray: state.data,
  };
};
export default connect(mapStateToProps, {})(withStyles(styles)(CartModal));
