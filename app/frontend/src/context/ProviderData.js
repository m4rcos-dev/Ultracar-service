import { useState } from 'react'

import PropTypes from 'prop-types';
import { ContextData } from './ContextData';

export function ProviderData({ children }) {
  const [contextData, setContextData] = useState({
    currentCustomer: {
      os: '',
      name: '',
      car: '',
      mechanic: '',
    },
    currentService: [{}]
  });

  const handleCurrentCustomer = (currentCustomer) => {
    setContextData({ ...contextData, currentCustomer: currentCustomer });
  };

  const handleCurrentService = (currentService) => {
    setContextData({
      ...contextData,
      currentService: [...contextData.currentService, currentService]
    });
  };

  return (
    <ContextData.Provider value={{
      contextData, handleCurrentCustomer, handleCurrentService
    }}>
      {children}
    </ContextData.Provider>
  )
}


ProviderData.propTypes = {
  children: PropTypes.node.isRequired,
};
