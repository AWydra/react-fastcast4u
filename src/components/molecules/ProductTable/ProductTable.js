import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function createData(name, price) {
  return { name, price };
}

const rows = [
  createData('Radio Server - Everest Cast', 9.0),
  createData('Radio Promotion Package', 5),
  createData('Mobile App Android & Apple iOS', 10),
  createData('AdMob monetization', 0),
  createData('Push notifications', 0),
];

const useStyles = makeStyles(theme => ({
  row: {
    backgroundColor: theme.palette.grey[100],
    '&:nth-child(2n)': {
      backgroundColor: 'transparent',
    },
  },
  cell: {
    padding: `${theme.spacing(1.25)}px 15px`,
    color: theme.palette.grey[700],
    fontSize: '1rem',
  },
  cellPrice: {
    color: theme.palette.grey[900],
    fontWeight: 600,
  },
}));

const ProductTable = () => {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table aria-label="Summary Table">
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name} className={classes.row}>
              <TableCell component="th" scope="row" className={classes.cell}>
                {row.name}
              </TableCell>
              <TableCell align="right" className={`${classes.cell} ${classes.cellPrice}`}>
                ${row.price}.00
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
