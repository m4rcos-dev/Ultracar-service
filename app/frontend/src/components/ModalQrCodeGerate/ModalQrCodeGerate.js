import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ContextConfig } from '../../context/ContextConfig';
import { useContext, useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import { Button, Link } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const style = {
  position: 'absolute',
  top: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ModalQrCodeGerate() {
  const [qrCodeImg, setQrCodeImg] = useState('');
  const { valueContext, handleModalGerate } = useContext(ContextConfig);

  useEffect(() => {
    const handleQrCodeImg = () => {
      QRCodeLink.toDataURL(valueContext.currentQrCode, {
        width: 600,
        margin: 3,
      }, (err, url) => {
        setQrCodeImg(url);
      })
    };
    handleQrCodeImg();
  }, [])

  return (
    <Modal
      open={valueContext.openModalGerate}
      onClose={() => handleModalGerate(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <QRCode
          value={valueContext.currentQrCode}
        />
        <Link href={qrCodeImg} download={`qrcode.png`} sx={{ marginTop: 2}}>
          <Button variant="outlined" endIcon={<DownloadIcon />}>Baixar QrCode</Button>
        </Link>
      </Box>
    </Modal>
  );
}

export default ModalQrCodeGerate
