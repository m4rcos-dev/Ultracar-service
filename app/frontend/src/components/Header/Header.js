import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useContext } from 'react';
import { ContextConfig } from '../../context/ContextConfig';
import { AppBar, Box } from './HeaderStyle';
import { logo } from '../../assets/index'

function Header() {
  const { valueContext, handleMenuOpen } = useContext(ContextConfig)

  return (
    <Box>
      <AppBar open={valueContext.openMenu}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleMenuOpen(true)}
            edge="start"
            sx={{
              marginRight: 5,
              ...(valueContext.openMenu && { display: 'none' }),
            }}
          >
            <img src={logo} alt="logo" style={{ width: "40px"}}/>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            SCANEAR
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header
