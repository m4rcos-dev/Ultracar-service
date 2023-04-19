import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ContextConfig } from '../../context/ContextConfig';
import { useContext, useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import { Button, Link } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { style } from './ModalQrCodeGerateStyle';

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
  }, [valueContext.currentQrCode])

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
