import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Face, Home, Code, Forum, Public } from '@material-ui/icons/'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function OutlinedButtons(props) {
  const { classes } = props;
  return (
    <div className='navigation'>
      <div className='navContainer'>
      <Button component={Link} to='/'  color="secondary" className={classes.button}>
        <Home/>
      </Button>

      <Button component={Link} to='/profile'  color="secondary" className={classes.button}>
        <Face/>
      </Button>

      <Button component={Link} to='/developer'  color="secondary" className={classes.button}>
        <Code/>
      </Button>

      <Button component={Link} to='/contact'  color="secondary" className={classes.button}>
        <Forum/>
      </Button>

      <Button component={Link} to='/social'  color="secondary" className={classes.button}>
        <Public/>
      </Button>
      </div>


    </div>
  );
}

OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedButtons);