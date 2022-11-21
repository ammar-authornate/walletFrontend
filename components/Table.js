import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: 'rgba(255,255,255,0.9)',
    backgroundColor:'#262626',
    padding:'40px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    borderRadius:'40px',
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} style={{ marginTop: '3vh',borderRadius:'40px' }}>
      <Table
        sx={{ minWidth: 700, background: '#262626' }}
        aria-label='customized table'
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align='right'>Calories</StyledTableCell>
            <StyledTableCell align='right'>Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align='right'>Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align='right'>Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name} style={{backgroundColor:'#4c4c4c',borderRadius:'40px',marginTop:'40px'}}>
              <StyledTableCell
                component='th'
                scope='row'
                style={{ color: 'white' }}
              >
                {row.name}
              </StyledTableCell>
              <StyledTableCell align='right' style={{ color: 'white' ,padding:'40px'}}>
                {row.calories}
              </StyledTableCell>
              <StyledTableCell align='right' style={{ color: 'white' }}>
                {row.fat}
              </StyledTableCell>
              <StyledTableCell align='right' style={{ color: 'white' }}>
                {row.carbs}
              </StyledTableCell>
              <StyledTableCell align='right' style={{ color: 'white' }}>
                {row.protein}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
