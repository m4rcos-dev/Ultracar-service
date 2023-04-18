import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CustomerData } from '../../data/CustomerData';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

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
