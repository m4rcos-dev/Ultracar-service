import Modal from '@mui/material/Modal';
import { ContextConfig } from '../../context/ContextConfig';
import { useContext} from 'react';
import QrScaner from '../QrScaner/QrScaner';
import { Box } from './ModalQrScannerStyle';

function ModalQrScanner() {
  const { valueContext, handleModalGerate } = useContext(ContextConfig);

  return (
    <Modal
      open={valueContext.openModalGerate}
      onClose={() => handleModalGerate(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <QrScaner />
      </Box>
    </Modal>
  );
}

export default ModalQrScanner
