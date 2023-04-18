import { useState } from 'react'
import { ContextConfig } from './ContextConfig'
import PropTypes from 'prop-types';

export function ProviderConfig({ children }) {
  const [valueContext, setValueContext] = useState({
    openMenu: false,
    openModalGerate: false,
    currentQrCode: '/',
  });

  const handleMenuOpen = (statusMenu) => {
    setValueContext({ ...valueContext, openMenu: statusMenu });
  };

  const handleModalGerate = (statusModal) => {
    setValueContext({ ...valueContext, openModalGerate: statusModal });
  };

  const handleCurrentQrCode = (statusQrCode) => {
    setValueContext({ ...valueContext, currentQrCode: statusQrCode, openModalGerate: true })
  }

  return (
    <ContextConfig.Provider value={{
      valueContext, handleMenuOpen, handleModalGerate, handleCurrentQrCode
    }}>
      {children}
    </ContextConfig.Provider>
  )
}


ProviderConfig.propTypes = {
  children: PropTypes.node.isRequired,
};
