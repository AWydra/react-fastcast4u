import React from 'react';
import styled, { css } from 'styled-components';
import { makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import dottedImg from 'assets/img/dotted.png';

const FancyTitleContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-basis: 100%;
    background-image: url(${dottedImg});
    background-position: center;
    background-repeat: repeat-x;

    ${theme.breakpoints.down('sm')} {
      margin: 0 -15px;
    }
  `}
`;

const useStyles = makeStyles(theme => ({
  text: {
    margin: `${theme.spacing(5)}px 0`,
    padding: `0 ${theme.spacing(2)}px`,
    display: 'inline-block',
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
    fontSize: 22,
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
