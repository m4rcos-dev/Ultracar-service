import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CustomerData } from '../../data/CustomerData';
import { StyledTableCell, StyledTableRow } from './CustomerTableStyle';

function CutomersTable() {
  return (
    <TableContainer component={Paper} sx={{ marginLeft: 6, minWidth: 200, maxWidth: 1600 }}>
      <Table sx={{ minWidth: 200, maxWidth: 1600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Cliente</StyledTableCell>
            <StyledTableCell align="left">Carro</StyledTableCell>
            <StyledTableCell align="right">Qr Code</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {CustomerData.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.car}</StyledTableCell>
              <StyledTableCell align="right">Gerar</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CutomersTable
