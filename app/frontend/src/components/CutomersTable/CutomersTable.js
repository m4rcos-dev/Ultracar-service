import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CustomerData } from '../../data/CustomerData';
import { StyledTableCell, StyledTableRow, StyleTableContainer } from './CustomerTableStyle';
import { useContext } from 'react';
import { ContextConfig } from '../../context/ContextConfig';
import { Link } from '@mui/material';

function CutomersTable() {
  const { valueContext } = useContext(ContextConfig);
  const openMenu = valueContext.openMenu;

  return (
    <StyleTableContainer component={Paper}
      sx={{ maxWidth: openMenu ? 1600 : 1800, marginLeft: openMenu ? 30 : 6, }}
    >
      <Table sx={{ minWidth: 100, maxWidth: openMenu ? 1600 : 1800 }}
        aria-label="customized table"
      >
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
              <StyledTableCell align="right">
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                >
                  Gerar
                </Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyleTableContainer>
  );
}

export default CutomersTable
