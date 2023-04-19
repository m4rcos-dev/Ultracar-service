import { Box } from "@mui/material"
import { Player } from '@lottiefiles/react-lottie-player';
import { scanQrCode, staticQrButon } from "../../assets";

function ScanQrButon() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <img src={staticQrButon} alt="qrcod buton" />
      <Player
        autoplay
        loop
        src={scanQrCode}
        style={{ width: 500 }}
      />
    </Box>
  )
}

export default ScanQrButon
