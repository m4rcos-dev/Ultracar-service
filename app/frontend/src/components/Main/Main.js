import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import StartOs from '../../pages/StartOs'
import { DrawerHeader } from '../Menu/MenuStyle'

function Main() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Routes>
        <Route path='/' element={<StartOs />} />
      </Routes>
    </Box>
  )
}

export default Main
