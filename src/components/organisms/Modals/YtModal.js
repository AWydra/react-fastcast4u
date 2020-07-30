// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Modal, makeStyles } from '@material-ui/core';
import YTContainer from 'components/atoms/YTContainer/YTContainer';

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    maxWidth: 800,
  },
});

const YtModal = ({ onClose, url, ...props }) => {
  const classes = useStyles();

  return (
    <Modal className={classes.modal} onClose={onClose} {...props}>
      <Box className={classes.container}>
        <YTContainer>
          <iframe
            width="560"
            height="auto"
            title="YT player"
            src={url}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </YTContainer>
      </Box>
    </Modal>
  );
};

YtModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

export default YtModal;
