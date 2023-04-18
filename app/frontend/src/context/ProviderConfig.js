import { useState } from 'react'
import { ContextConfig } from './ContextConfig'
import PropTypes from 'prop-types';

export function ProviderConfig({ children }) {
  const [valueContext, setValueContext] = useState({
    openMenu: false,
  });

  const handleMenuOpen = (statusMenu) => {
    setValueContext({ openMenu: statusMenu });
  };

  return (
    <ContextConfig.Provider value={{ valueContext, handleMenuOpen }}>
      {children}
    </ContextConfig.Provider>
  )
}


ProviderConfig.propTypes = {
  children: PropTypes.node.isRequired,
};
