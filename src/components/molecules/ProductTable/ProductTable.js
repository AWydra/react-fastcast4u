import React from 'react';
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

const ProductTable = ({ order }) => {
  console.log('ProductTable', order);
  const classes = useStyles();

  return (
    <TableContainer>
      <Table aria-label="Summary Table">
        <TableBody>
          {order.products
            .filter(product => product.active)
            .map(product => (
              <TableRow key={product.id} className={classes.row}>
                <TableCell component="th" scope="row" className={classes.cell}>
                  {product.name}
                </TableCell>
                <TableCell align="right" className={`${classes.cell} ${classes.cellPrice}`}>
                  {order.currency}
                  {product[order.cycle].regular}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
