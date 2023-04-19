import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useContext } from "react";
import { ContextData } from "../../context/ContextData";

function OrderServicesHeader() {
  const { contextData } = useContext(ContextData)
  const { currentCustomer } = contextData;

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'secondary.main' }}>
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
