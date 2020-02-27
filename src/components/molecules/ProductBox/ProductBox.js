// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import orderActions from 'actions/orderActions';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, Divider } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import theme from 'theme/mainTheme';

const GridContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr ${({ showPrice }) => showPrice && '105px'};

  ${theme.breakpoints.down('xs')} {
    grid-template-columns: 1fr ${({ showPrice }) => showPrice && 'auto'};
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
    boxShadow: isActive ? `0 0 8px 1px ${theme.palette.primary.main}` : 'unset',
    border: `solid 3px ${
      isActive
        ? theme.palette.primary.main
        : theme.palette.type !== 'dark'
        ? theme.palette.grey[300]
        : theme.palette.grey[700]
    }`,
  }),
  actionArea: {
    height: '100%',
  },
  content: {
    padding: theme.spacing(2.5),
    flexGrow: 1,
  },
  pricing: {
    padding: theme.spacing(2.5, 1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.type !== 'dark' && theme.palette.grey[100],
    transition: 'unset',
    borderLeft: `solid 2px ${
      theme.palette.type !== 'dark' ? theme.palette.grey[300] : theme.palette.grey[700]
    }`,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2.5, 2),
    },
  },
}));

const ProductBox = ({ data, type, showPrice }) => {
  const dispatch = useDispatch();
  const activeProduct = useSelector(state => state.order.activeProduct.id);
  const activeAddons = useSelector(state => state.order.activeAddons.map(({ id }) => id));

  const isActive =
    type === 'product'
      ? data.id === activeProduct
      : activeAddons.filter(id => id === data.id).length;
  const { name, description } = data;
  const price = 12;
  const classes = useStyles(isActive, showPrice);

  const handleClick = () => {
    type === 'product'
      ? dispatch(orderActions.toggleProduct(data))
      : dispatch(orderActions.toggleAddon(data));
  };

  return (
    <Card className={classes.root} onClick={handleClick}>
      <CardActionArea className={classes.actionArea}>
        <GridContainer showPrice={showPrice}>
          <CardContent className={classes.content}>
            <Text gutterBottom variant="h6" component="h4" fontWeight={600}>
              {name}
            </Text>
            <Divider />
            <Text variant="body2" color="textSecondary" component="p" mt={1}>
              {description}
            </Text>
          </CardContent>
          {showPrice && (
            <CardContent className={classes.pricing}>
              <Price>
                {price && <PriceUnit>$</PriceUnit>}
                {price || (
                  <Text component="p" variant="h4">
                    FREE
                  </Text>
                )}
                {price && <PriceCycle>monthly</PriceCycle>}
              </Price>
            </CardContent>
          )}
        </GridContainer>
      </CardActionArea>
    </Card>
  );
};

ProductBox.propTypes = {
  showPrice: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

ProductBox.defaultProps = {};

export default ProductBox;
