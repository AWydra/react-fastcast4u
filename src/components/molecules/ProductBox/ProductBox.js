// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, Divider } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';

const GridContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr ${({ pricing }) => pricing && '125px'};
`;

const Price = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
`;

const PriceUnit = styled.span`
  display: inline-block;
  vertical-align: top;
  font-size: 28px;
  font-weight: 400;
`;

const PriceCycle = styled.div`
  margin-top: 5px;
  color: #999;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.31em;
  font-weight: 300;
`;

const useStyles = makeStyles(theme => ({
  root: isActive => ({
    maxWidth: 500,
    boxShadow: isActive ? `0 0 8px 1px ${theme.palette.primary.main}` : 'unset',
    border: isActive
      ? `solid 3px ${theme.palette.primary.main}`
      : `solid 3px ${theme.palette.grey[300]}`,
  }),
  actionArea: {
    height: '100%',
  },
  content: {
    padding: theme.spacing(2.5),
    flexGrow: 1,
  },
  pricing: {
    minWidth: 125,
    paddingLeft: 8,
    paddingRight: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.grey[100],
    borderLeft: `solid 2px ${theme.palette.grey[300]}`,
  },
}));

const ProductBox = ({ pricing, isActive }) => {
  const classes = useStyles(isActive);

  return (
    <Card className={classes.root} onClick={() => console.log('clicked!')}>
      <CardActionArea className={classes.actionArea}>
        <GridContainer pricing={pricing}>
          <CardContent className={classes.content}>
            <Text gutterBottom variant="h5" component="h4">
              Everest Cast
            </Text>
            <Divider />
            <Text variant="body2" color="textSecondary" component="p" mt={1}>
              New, evolving Radio Control Panel with a fresh user interface, advanced graphic AutoDJ
              playlist scheduler, drag &amp; drop music manager and basic listener statistics. You
              can switch between SHOUTcast and IceCast Radio Servers
            </Text>
          </CardContent>
          {pricing && (
            <CardContent className={classes.pricing}>
              <Price>
                <PriceUnit>$</PriceUnit>
                20
                <PriceCycle>monthly</PriceCycle>
              </Price>
            </CardContent>
          )}
        </GridContainer>
      </CardActionArea>
    </Card>
  );
};

ProductBox.propTypes = {
  pricing: PropTypes.bool,
  isActive: PropTypes.bool.isRequired,
};

ProductBox.defaultProps = {
  pricing: false,
};

export default ProductBox;
