import { Box, Button } from "@mui/material"
import { Player } from '@lottiefiles/react-lottie-player';
import { scanQrCode } from "../../assets";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import { animateStyle, button, container } from "./ScanQrButonStyle";


function ScanQrButon() {
  return (
    <Box sx={container}>
      <Player
        autoplay
        loop
        src={scanQrCode}
        style={animateStyle}
      />
      <Button
        variant="contained"
        endIcon={<QrCodeScannerIcon />}
        sx={button}
      >
        Ler QrCode
      </Button>
    </Box>
  )
}

export default ScanQrButon
