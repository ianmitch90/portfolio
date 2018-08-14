import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Face, Home, Code, Forum } from '@material-ui/icons/'

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
      <Button component={Link} to='/'  variant='outlined' color="secondary" className={classes.button}>
        <Home/>
      </Button>

      <Button component={Link} to='/profile'  variant='outlined' color="secondary" className={classes.button}>
        <Face/>
      </Button>

      <Button component={Link} to='/developer'  variant='outlined' color="secondary" className={classes.button}>
        <Code/>
      </Button>

      <Button component={Link} to='/contact'  variant='outlined' color="secondary" className={classes.button}>
        <Forum/>
      </Button>

      </div>


    </div>
  );
}

OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedButtons);