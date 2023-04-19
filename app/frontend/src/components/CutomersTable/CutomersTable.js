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
import ModalQrCodeGerate from '../ModalQrCodeGerate/ModalQrCodeGerate';

function CutomersTable() {
  const { valueContext, handleCurrentQrCode } = useContext(ContextConfig);
  const openMenu = valueContext.openMenu;

  const gerateQrCode = ({name, car}) => {
    const currentUrl = `/start/${name}/${car}`;
    handleCurrentQrCode(currentUrl);
  };

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
                  onClick={() => gerateQrCode(row)}
                >
                  Gerar
                </Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <ModalQrCodeGerate />
    </StyleTableContainer>
  );
}

export default CutomersTable
