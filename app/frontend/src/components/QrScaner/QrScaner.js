import { Box } from '@mui/material';
import { useState } from 'react'
import QrReader from 'react-weblineindia-qrcode-scanner'

function QrScaner() {
  const [result, setResult] = useState('No result');
  const delay = 100;
  const previewStyle = {
    height: 600,
    width: 300,
  }

  const handleScan = (data) => {
    setResult(data);
  }

  const handleError = (err) => {
    console.error(err);
  }

  return (
    <Box>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{result}</p>
    </Box>
  )
}

export default QrScaner
