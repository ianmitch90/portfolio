import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const styles = {
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 60,
        height: 60,
    },
};

function profilePicture() {
    return (
        <Avatar alt='Ian smiling.' src='../../../Assets/images/imgface-min.png' />
    );
}

profilePicture.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(profilePicture);