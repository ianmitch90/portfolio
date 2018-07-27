import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {Menu, Face, Home, Code, Forum, Public} from '@material-ui/icons/'


const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class Header extends React.Component {
  state = {
    top: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;


    const fullList = (
      <div className={classes.fullList}>
        <List><Home/> Home</List>
        <Divider />
        <List><Face/> About Me</List>
        <Divider />
        <List><Code/> Developer Profile</List>
        <Divider />
        <List><Forum/> Contact</List>
        <Divider />
        <List><Public/> Social</List>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('top', true)}><Menu/></Button>


        <SwipeableDrawer
          anchor="top"
          open={this.state.top}
          onClose={this.toggleDrawer('top', false)}
          onOpen={this.toggleDrawer('top', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
          >
            {fullList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);