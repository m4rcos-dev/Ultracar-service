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
    currentService: [{
      service: '',
      cost: '',
    }],
    ordersServices: [{
      os: '',
      name: '',
      car: '',
      mechanic: '',
    }]
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

  const handleOrdersServices = (addOrder) => {
    setContextData({
      ...contextData,
      ordersServices: [...contextData.ordersServices, addOrder]
    });
  };

  return (
    <ContextData.Provider value={{
      contextData, handleCurrentCustomer, handleCurrentService, handleOrdersServices
    }}>
      {children}
    </ContextData.Provider>
  )
}


ProviderData.propTypes = {
  children: PropTypes.node.isRequired,
};
