// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Checkbox,
  Divider,
  makeStyles,
} from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import { modeSwitch } from 'utils/theme';

const useStyles = makeStyles(theme => ({
  root: ({ isActive }) => ({
    height: '100%',
    boxShadow: isActive ? `0px 0 0px 2px ${theme.palette.primary.main}` : 'unset',
    border: `solid 1px ${
      isActive ? theme.palette.primary.main : theme.palette.grey[modeSwitch(400, 800)]
    }`,
    transition: 'unset',
  }),
  actionArea: {
    height: '100%',
  },
  content: {
    height: '100%',
    padding: `${theme.spacing(1, 1.5)} !important`,
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    flexGrow: 1,
    [theme.breakpoints.up('lg')]: {
      padding: `${theme.spacing(2, 2.5)} !important`,
      paddingBottom: ({ showPrice }) => showPrice && `${theme.spacing(1.5)}px !important`,
    },
  },
  checkbox: { position: 'absolute', right: 0, top: 0 },
  heading: {
    fontSize: theme.typography.pxToRem(17),
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.pxToRem(20),
    },
  },
  desc: {
    fontSize: theme.typography.pxToRem(14),
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.pxToRem(15),
    },
  },
  priceContainer: {
    marginTop: 'auto',
    paddingTop: theme.spacing(0.5),
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'flex-end',
  },
  price: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: 600,
    color: theme.palette.primary.main,
  },
  priceOld: {
    marginRight: theme.spacing(0.5),
    alignSelf: 'flex-start',
    color: theme.palette.grey[modeSwitch(600, 400)],
    textDecoration: 'line-through',
  },
  cycle: {
    marginLeft: theme.spacing(0.5),
    color: theme.palette.grey[modeSwitch(700, 300)],
    fontSize: theme.typography.pxToRem(14),
  },
}));

const ProductBox = ({
  data,
  cycle,
  isActive,
  priceProp,
  priceBasicProp,
  showPrice,
  hideCheckbox,
  disabled,
  onClick,
}) => {
  const currency = useSelector(state => state.general.currency);
  const { name, description } = data;
  const price = priceProp || Number(data[cycle]);
  const priceBasic = priceBasicProp || Number(data[`${cycle}Basic`]);
  const classes = useStyles({ isActive, showPrice });

  return (
    <Card className={classes.root} onClick={onClick}>
      <CardActionArea className={classes.actionArea} disabled={disabled}>
        {!hideCheckbox && (
          <Checkbox checked={isActive} color="primary" className={classes.checkbox} />
        )}
        <CardContent className={classes.content}>
          <Text
            className={classes.heading}
            gutterBottom
            variant="subtitle1"
            component="h4"
            fontWeight={600}
            pr={3}
          >
            {name}
          </Text>
          <Divider />
          <Text className={classes.desc} color="textSecondary" component="p" mt={1}>
            {description}
          </Text>
          {showPrice && (
            <Box className={classes.priceContainer}>
              {priceBasic !== price && (
                <Text className={classes.priceOld}>
                  {!!priceBasic && currency}
                  {priceBasic ? priceBasic.toFixed(2) : 'FREE'}
                </Text>
              )}
              <Text className={classes.price}>
                {!!price && currency}
                {price ? price.toFixed(2) : 'FREE'}
              </Text>
              {!!price && (
                <Text className={classes.cycle} component="span">
                  {cycle}
                </Text>
              )}
            </Box>
          )}
        </CardContent>
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
  cycle: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  priceProp: PropTypes.number,
  priceBasicProp: PropTypes.number,
  hideCheckbox: PropTypes.bool,
  disabled: PropTypes.bool,
};

ProductBox.defaultProps = {
  cycle: '',
  isActive: false,
  onClick: () => {},
  priceProp: 0,
  priceBasicProp: 0,
  hideCheckbox: false,
  disabled: false,
};

export default ProductBox;
