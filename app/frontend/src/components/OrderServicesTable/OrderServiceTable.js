import { Paper, Table, TableBody, TableHead, TableRow } from "@mui/material"
import { useContext } from "react";
import { ContextConfig } from "../../context/ContextConfig";
import { ContextData } from "../../context/ContextData";
// import { CustomerData } from "../../data/CustomerData";
import { StyledTableCell, StyledTableRow, StyleTableContainer } from "../CutomersTable/CustomerTableStyle"
import ModalQrCodeGerate from "../ModalQrCodeGerate/ModalQrCodeGerate"

function OrderServiceTable() {
  const { valueContext } = useContext(ContextConfig);
  const openMenu = valueContext.openMenu;
  const { contextData } = useContext(ContextData);
  const { currentService } = contextData;

  return (
    <StyleTableContainer component={Paper}
    sx={{ maxWidth: openMenu ? 1600 : 1800, marginLeft: openMenu ? 30 : 6, }}
  >
    <Table sx={{ minWidth: 100, maxWidth: openMenu ? 1600 : 1800 }}
      aria-label="customized table"
    >
      <TableHead>
        <TableRow>
          <StyledTableCell>Serviço</StyledTableCell>
          <StyledTableCell align="left">Valor</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {currentService.map((row) => (
          <StyledTableRow key={row.service}>
            <StyledTableCell component="th" scope="row">
              {row.service}
            </StyledTableCell>
            <StyledTableCell align="left">{row.cost}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
    <ModalQrCodeGerate />
  </StyleTableContainer>
  )
}

export default OrderServiceTable
