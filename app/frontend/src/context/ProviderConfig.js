import { useState } from 'react'
import { ContextConfig } from './ContextConfig'
import PropTypes from 'prop-types';

export function ProviderConfig({ children }) {
  const [valueContext, setValueContext] = useState({
    openMenu: false,
    openModalGerate: false,
  });

  const handleMenuOpen = (statusMenu) => {
    setValueContext({ ...valueContext, openMenu: statusMenu });
  };

  const handleModalGerate = (statusModal) => {
    setValueContext({...valueContext, openModalGerate: statusModal});
  };

  return (
    <ContextConfig.Provider value={{ valueContext, handleMenuOpen, handleModalGerate }}>
      {children}
    </ContextConfig.Provider>
  )
}


ProviderConfig.propTypes = {
  children: PropTypes.node.isRequired,
};
