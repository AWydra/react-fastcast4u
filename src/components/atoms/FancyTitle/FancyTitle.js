import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import dottedImg from 'assets/img/dotted.png';

const FancyTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 100%;
  background-image: url(${dottedImg});
  background-position: center;
  background-repeat: repeat-x;
`;

const useStyles = makeStyles(theme => ({
  text: {
    margin: `${theme.spacing(4)}px 0`,
    padding: `0 ${theme.spacing(2)}px`,
    display: 'inline-block',
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 600,
  },
}));

const FancyTitle = ({ ...props }) => {
  const classes = useStyles();

  return (
    <FancyTitleContainer>
      <Text className={classes.text} {...props} />
    </FancyTitleContainer>
  );
};

export default FancyTitle;
