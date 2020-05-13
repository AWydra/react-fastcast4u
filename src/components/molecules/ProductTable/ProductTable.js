// @ts-nocheck
import React from 'react';
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
  row: {
    backgroundColor: theme.palette.type !== 'dark' && theme.palette.grey[100],
    '&:nth-child(2n)': {
      backgroundColor: 'transparent',
    },
  },
  cell: {
    padding: `${theme.spacing(1.25)}px 15px`,
    color: theme.palette.type !== 'dark' && theme.palette.grey[700],
    fontSize: '1rem',
    '&:first-child': {
      paddingRight: 0,
    },
  },
  cellPrice: {
    color: theme.palette.type !== 'dark' && theme.palette.grey[900],
    fontWeight: 600,
  },
}));

const ProductTable = () => {
  const products = useSelector(state => state.order.products);
  const activeProduct = useSelector(state => state.order.activeProduct);
  const addons = useSelector(state => state.order.addons);
  const activeAddons = useSelector(state => state.order.activeAddons);
  const currency = useSelector(state => state.order.currency);
  const cycle = useSelector(state => state.order.cycle);
  const plan = useSelector(state => state.order.plan);
  const loading = useSelector(state => state.order.loading);
  const activeProductObject = products.find(({ id }) => id === activeProduct);
  const classes = useStyles();

  return (
    <TableContainer>
      <Table aria-label="Summary Table">
        <TableBody>
          <TableRow className={classes.row}>
            {loading ? (
              <TableCell component="th" colSpan={2} className={classes.cell}>
                <Skeleton animation="wave" height={22} width="100%" />
              </TableCell>
            ) : (
              <>
                <TableCell component="th" scope="row" className={classes.cell}>
                  Radio Server - {activeProductObject.name}
                  {plan === 'premium' ? ' (320kbps)' : ' (128kbps)'}
                </TableCell>
                <TableCell align="right" className={`${classes.cell} ${classes.cellPrice}`}>
                  {currency}
                  {activeProductObject[cycle][plan]}
                </TableCell>
              </>
            )}
          </TableRow>
          {activeAddons.map(addonId => {
            const addon = addons.find(el => el.relid === addonId);
            return (
              <TableRow key={addon.relid} className={classes.row}>
                <TableCell component="th" scope="row" className={classes.cell}>
                  {addon.name}
                </TableCell>
                <TableCell align="right" className={`${classes.cell} ${classes.cellPrice}`}>
                  {currency}
                  {addon[cycle]}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
