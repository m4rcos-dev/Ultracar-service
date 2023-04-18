import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Customers from '../../pages/Customers'
import ServicesOrder from '../../pages/ServicesOrder'
import StartOs from '../../pages/StartOs'
import { DrawerHeader } from '../Menu/MenuStyle'

function Main() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Routes>
        <Route path='/' element={<StartOs />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/orders' element={<ServicesOrder />} />
      </Routes>
    </Box>
  )
}

export default Main
