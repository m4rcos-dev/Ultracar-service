import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { useTheme } from '@mui/material';
import { useContext } from 'react';
import { ContextConfig } from '../../context/ContextConfig';
import { Drawer, DrawerHeader } from './MenuStyle';
import { logoText } from '../../assets';
import { useNavigate  } from 'react-router-dom';

function Menu() {
  const theme = useTheme();
  const { valueContext, handleMenuOpen } = useContext(ContextConfig);
  const navigate = useNavigate();

  const handleRoute = (currentRoute) => {
    switch (currentRoute) {
      case 'Qr Code':
        navigate('/');
        break;
      case 'Clientes':
        navigate('/customers');
        break;
      case 'Ordens de Serviço':
        navigate('/orders');
        break;
    }
  };

  return (
    <Drawer variant="permanent" open={valueContext.openMenu}>
      <DrawerHeader>
        <IconButton onClick={() => handleMenuOpen(!valueContext.openMenu)}>
          <img src={logoText} alt="logo" style={{ width: "180px" }} />
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {['Qr Code', 'Clientes', 'Ordens de Serviço'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={() => handleRoute(text)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {index === 0 && <QrCode2Icon />}
                {index === 1 && <PeopleAltIcon />}
                {index === 2 && <TimeToLeaveIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  )
}

export default Menu;
