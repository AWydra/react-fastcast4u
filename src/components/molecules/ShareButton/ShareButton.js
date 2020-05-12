import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';
import { Menu, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core';
import IconButtonWithLabel from 'components/atoms/IconButtonWithLabel/IconButtonWithLabel';
import ShareIcon from '@material-ui/icons/ShareOutlined';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MessengerIcon from 'assets/svg/MessengerIcon';
import shareLinkVia from 'utils/shareLinkVia';
import { useAlert } from 'utils/customHooks';

const ShareButton = ({ id, ...props }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const alert = useAlert();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCopy = () => {
    copy(shareLinkVia.copy(id));
    alert.success('Link copied to clipboard');
    setAnchorEl(null);
  };

  const handleFacebook = () => {
    shareLinkVia.facebook(id);
    setAnchorEl(null);
  };

  const handleTwitter = () => {
    shareLinkVia.twitter('123');
    setAnchorEl(null);
  };

  return (
    <>
      <IconButtonWithLabel
        onClick={handleClick}
        icon={ShareIcon}
        label="Share"
        {...props}
        aria-controls="share-menu"
        aria-haspopup="true"
      />
      <Menu
        id="share-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleCopy}>
          <ListItemIcon>
            <FileCopyOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Copy" />
        </MenuItem>
        <MenuItem onClick={handleFacebook}>
          <ListItemIcon>
            <FacebookIcon />
          </ListItemIcon>
          <ListItemText primary="Facebook" />
        </MenuItem>
        <MenuItem
          component="a"
          href={shareLinkVia.messenger('123')}
          target="_blank"
          onClick={() => setAnchorEl(null)}
        >
          <ListItemIcon>
            <MessengerIcon />
          </ListItemIcon>
          <ListItemText primary="Messenger" />
        </MenuItem>
        <MenuItem onClick={handleTwitter}>
          <ListItemIcon>
            <TwitterIcon />
          </ListItemIcon>
          <ListItemText primary="Twitter" />
        </MenuItem>
      </Menu>
    </>
  );
};

ShareButton.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ShareButton;
