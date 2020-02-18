// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, Divider } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import theme from 'theme/mainTheme';

const GridContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr ${({ price }) => price && '125px'};

  ${theme.breakpoints.down('xs')} {
    grid-template-columns: 1fr ${({ price }) => price && 'auto'};
  }
`;

const Price = styled.div`
  font-family: ${theme.typography.fontFamily};
  font-size: 40px;
  text-align: center;
`;

const PriceUnit = styled.span`
  margin-left: -7px;
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
    paddingLeft: 8,
    paddingRight: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.grey[100],
    borderLeft: price => price && `solid 2px ${theme.palette.grey[300]}`,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: price => price && theme.spacing(2),
      paddingRight: price => price && theme.spacing(2),
    },
  },
}));

const ProductBox = ({ price, isActive }) => {
  const classes = useStyles(isActive, price);

  return (
    <Card className={classes.root} onClick={() => console.log('clicked!')}>
      <CardActionArea className={classes.actionArea}>
        <GridContainer price={price}>
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
          {price && (
            <CardContent className={classes.pricing}>
              <Price>
                {!!price.value && <PriceUnit>{price.unit}</PriceUnit>}
                {price.value ? (
                  price.value
                ) : (
                  <Text component="p" variant="h4">
                    FREE
                  </Text>
                )}
                {!!price.value && <PriceCycle>monthly</PriceCycle>}
              </Price>
            </CardContent>
          )}
        </GridContainer>
      </CardActionArea>
    </Card>
  );
};

ProductBox.propTypes = {
  price: PropTypes.shape({
    unit: PropTypes.string,
    value: PropTypes.oneOfType(PropTypes.number, PropTypes.string).isRequired,
  }),
  isActive: PropTypes.bool.isRequired,
};

ProductBox.defaultProps = {
  price: false,
};

export default ProductBox;
