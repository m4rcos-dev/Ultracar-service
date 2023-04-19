import { Box } from '@mui/material';
import QrReader from 'react-weblineindia-qrcode-scanner'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { qrAnimation } from '../../assets';
import { animateStyle, camStyle } from './QrScanerStyle';

function QrScaner() {
  const [result, setResult] = useState('No result');
  const delay = 100;

  const navigate = useNavigate();

  const handleScan = (data) => {
    setResult(data);
    if (result !== 'No result') navigate(result);
  }

  const handleError = (err) => {
    console.error(err);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Player
      autoplay
        loop
        src={qrAnimation}
        style={animateStyle}
      />
      <QrReader
        delay={delay}
        style={camStyle}
        onError={handleError}
        onScan={handleScan}
        facingMode='rear'
      />
      <p>{result}</p>
    </Box>
  )
}

export default QrScaner
