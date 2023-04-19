import { Box, Button } from "@mui/material"
import { Player } from '@lottiefiles/react-lottie-player';
import { scanQrCode } from "../../assets";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import { animateStyle, button, container } from "./ScanQrButonStyle";
import { useContext } from "react";
import { ContextConfig } from "../../context/ContextConfig";
import ModalQrScanner from "../ModalQrScanner/ModalQrScanner";


function ScanQrButon() {
  const { handleModalGerate } = useContext(ContextConfig)

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
        onClick={() => handleModalGerate(true)}
      >
        Ler QrCode
      </Button>
      <ModalQrScanner />
    </Box>
  )
}

export default ScanQrButon
