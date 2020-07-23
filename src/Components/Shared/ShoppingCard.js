import React from 'react';
import {withStyles} from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Faker from 'faker';
import {Grid} from '@material-ui/core';
import {connect} from 'react-redux';
import {addOrder, removeOrder} from '../../Actions/OrderActions';

const styles = (theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  title: {},
});

class ShoppingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      cartArray: [],
    };
  }

  onCartClick = () => {
    const {count} = this.state;
    this.setState({count: count + 1});
    this.props.addOrder(this.props.data);
  };
  onDecrement = () => {
    const {count} = this.state;
    this.setState({count: count - 1});
    this.props.removeOrder(this.props.data);
  };
  onIncrement = () => {
    const {count} = this.state;
    this.setState({count: count + 1});
    this.props.addOrder(this.props.data);
  };
  render() {
    const {classes} = this.props;
    const {count} = this.state;

    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Faker.image.food()}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              component="data"
              className={classes.title}
              variant="body1">
              {this.props.data.item}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500
            </Typography>
            <Grid container justify="space-between">
              <Typography
                gutterBottom
                component="data"
                className={classes.title}
                variant="body1">
                Amount
              </Typography>
              <Grid item>
                <Typography
                  gutterBottom
                  component="data"
                  className={classes.title}
                  variant="body1">
                  {this.props.data.price}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {count > 0 ? (
            <>
              <Button size="small" color="primary" onClick={this.onDecrement}>
                -
              </Button>
              {count}
              <Button size="small" color="primary" onClick={this.onIncrement}>
                +
              </Button>
            </>
          ) : (
            <Button size="small" color="primary" onClick={this.onCartClick}>
              Add to cart
            </Button>
          )}
        </CardActions>
      </Card>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('state', state);
  return {};
};

export default connect(mapStateToProps, {addOrder, removeOrder})(
  withStyles(styles)(ShoppingCard),
);
