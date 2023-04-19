import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useContext } from "react";
import { ContextData } from "../../context/ContextData";
import { List } from "./OrderServicesHeaderStyle";
import { ContextConfig } from "../../context/ContextConfig";

function OrderServicesHeader() {
  const { contextData } = useContext(ContextData)
  const { currentCustomer } = contextData;
  const { valueContext } = useContext(ContextConfig);
  const openMenu = valueContext.openMenu;

  return (
    <List sx={{ marginLeft: openMenu ? 30 : 10 }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MiscellaneousServicesIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="O.S." secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ManageAccountsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Cliente" secondary={currentCustomer.name} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ElectricCarIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Carro" secondary={currentCustomer.car} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DateRangeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Data inicio" secondary="July 20, 2014" />
      </ListItem>
    </List>
  )
}

export default OrderServicesHeader
