import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import languageActions from 'actions/languageActions';
import languageServices from 'services/language';

import {
  ButtonBase,
  Divider,
  Menu,
  MenuItem,
  Tooltip,
  makeStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import TranslateIcon from '@material-ui/icons/Public';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded';
import { modeSwitch } from 'utils/theme';

const useStyles = makeStyles(theme => ({
  button: {
    padding: theme.spacing(0.75, 0),
    color: theme.palette.primary[modeSwitch('main', 'light')],
    borderRadius: theme.shape.borderRadius,
    fontSize: theme.typography.pxToRem(26),

    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0.75, 1),
    },
  },
  text: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: 600,
  },
  arrow: {
    marginRight: -5,
  },
  divider: {
    margin: theme.spacing(0.75, 0),
  },
}));

const LanguageButton = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [langs, setLangs] = useState(null);
  const { language, code } = useSelector(state => state.language);
  const dispatch = useDispatch();

  useEffect(() => {
    languageServices.getRecomendedLangs().then(el => setLangs(el.recommend));
  }, []);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (language, code) => {
    dispatch(languageActions.setLanguage({ language, code }));
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Change language">
        <ButtonBase
          className={classes.button}
          onClick={handleClick}
          focusRipple
          aria-controls="language-menu"
          aria-haspopup="true"
        >
          <TranslateIcon fontSize="inherit" />
          {matches && (
            <Text className={classes.text} component="span" ml={0.75} mr={0.5}>
              {language.toUpperCase()}
            </Text>
          )}
          <ExpandMoreIcon className={classes.arrow} />
        </ButtonBase>
      </Tooltip>

      {langs && (
        <Menu id="language-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          {langs.map(el => (
            <MenuItem
              key={el.code}
              selected={el.code === code}
              onClick={() => handleMenuItemClick(el.name, el.code)}
            >
              {el.name}
            </MenuItem>
          ))}
          <Divider className={classes.divider} />
          <MenuItem component={Link} to="/language" onClick={handleClose}>
            View more languages
          </MenuItem>
        </Menu>
      )}
    </>
  );
};

export default LanguageButton;
