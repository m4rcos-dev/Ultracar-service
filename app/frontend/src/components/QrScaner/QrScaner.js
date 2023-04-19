import { Box } from '@mui/material';
import QrReader from 'react-weblineindia-qrcode-scanner'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function QrScaner() {
  const [result, setResult] = useState('No result');
  const delay = 100;
  const previewStyle = {
    height: 240,
    width: 320,
  }
  const navigate = useNavigate();

  const handleScan = (data) => {
    setResult(data);
    if (result !== 'No result') navigate(result);
  }

  const handleError = (err) => {
    console.error(err);
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
        facingMode='rear'
      />
      <p>{result}</p>
    </Box>
  )
}

export default QrScaner
