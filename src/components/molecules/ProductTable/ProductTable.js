// @ts-nocheck
import React from 'react';
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  },
  cellPrice: {
    color: theme.palette.type !== 'dark' && theme.palette.grey[900],
    fontWeight: 600,
  },
}));

const ProductTable = () => {
  const { products, addons, currency, cycle } = useSelector(state => state.order);
  const classes = useStyles();

  return (
    <TableContainer>
      <Table aria-label="Summary Table">
        <TableBody>
          {products
            .filter(product => product.active)
            .map(product => (
              <TableRow key={product.id} className={classes.row}>
                <TableCell component="th" scope="row" className={classes.cell}>
                  {product.name}
                </TableCell>
                <TableCell align="right" className={`${classes.cell} ${classes.cellPrice}`}>
                  {currency}
                  {product[cycle].regular}
                </TableCell>
              </TableRow>
            ))}
          {addons
            .filter(addon => addon.active)
            .map(addon => (
              <TableRow key={addon.id} className={classes.row}>
                <TableCell component="th" scope="row" className={classes.cell}>
                  {addon.name}
                </TableCell>
                <TableCell align="right" className={`${classes.cell} ${classes.cellPrice}`}>
                  {currency}
                  {addon[cycle]}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
