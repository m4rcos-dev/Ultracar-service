import { Paper, Table, TableBody, TableHead, TableRow } from "@mui/material";
import { useContext } from "react";
import { ContextConfig } from "../../context/ContextConfig";
import { ContextData } from "../../context/ContextData";
import { StyledTableCell, StyledTableRow, StyleTableContainer } from "../CutomersTable/CustomerTableStyle";

function AllOrderTable() {
  const { valueContext } = useContext(ContextConfig);
  const openMenu = valueContext.openMenu;
  const { contextData } = useContext(ContextData);
  const { ordersServices } = contextData;

  return (
    <StyleTableContainer component={Paper}
    sx={{ maxWidth: openMenu ? 1600 : 1800, marginLeft: openMenu ? 30 : 10, marginTop: 5}}
  >
    <Table sx={{ minWidth: 100, maxWidth: openMenu ? 1600 : 1800 }}
      aria-label="customized table"
    >
      <TableHead>
        <TableRow>
          <StyledTableCell>Cliente</StyledTableCell>
          <StyledTableCell align="left">Carro</StyledTableCell>
          <StyledTableCell align="left">Mecânico</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {ordersServices.map((row) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
              {row.name}
            </StyledTableCell>
            <StyledTableCell align="left">{row.car}</StyledTableCell>
            <StyledTableCell align="left">{row.mechanic}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </StyleTableContainer>
  )
}

export default AllOrderTable
