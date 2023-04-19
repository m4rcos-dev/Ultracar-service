import { useState } from 'react'

import PropTypes from 'prop-types';
import { ContextData } from './ContextData';

export function ProviderData({ children }) {
  const [contextData, setContextData] = useState({
    currentCustomer: {
      os: '',
      name: '',
      car: '',
    },
  });

  const handleCurrentCustomer = (currentCustomer) => {
    setContextData({ ...contextData, currentCustomer: currentCustomer });
  };

  return (
    <ContextData.Provider value={{
      contextData, handleCurrentCustomer,
    }}>
      {children}
    </ContextData.Provider>
  )
}


ProviderData.propTypes = {
  children: PropTypes.node.isRequired,
};
