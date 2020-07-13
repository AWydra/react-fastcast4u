// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const YTContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 */
  position: relative;
  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

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
    <Modal
      className={classes.modal}
      fullWidth
      maxWidth="lg"
      scroll="paper"
      onClose={onClose}
      {...props}
    >
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
