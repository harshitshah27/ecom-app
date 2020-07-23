import React from 'react';
import {withStyles} from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import {connect} from 'react-redux';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
    // backgroundColor: 'yellow',
    color: 'white',
    '&:hover': {
      backgroundColor: 'none',
      color: 'yellow',
    },
  },
  title: {
    flexGrow: 1,
    height: '20px',
    width: '20px',
  },
  imageStyle: {
    backgroundColor: '#12100a',
  },
});

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid white`,
    padding: '0 4px',
  },
}))(Badge);

function ButtonAppBar(props) {
  const {classes, cartArray} = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.imageStyle}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Let Eat Be
          </Typography>
          <IconButton aria-label="cart" className={classes.menuButton}>
            <StyledBadge badgeContent={cartArray.length} color="default">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cartArray: state.data,
  };
};
export default connect(mapStateToProps, {})(withStyles(styles)(ButtonAppBar));
