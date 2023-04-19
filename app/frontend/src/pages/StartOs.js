import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import OrderServicesHeader from "../components/OrderServicesTable/OrderServicesHeader";
import SelectMechanic from "../components/OrderServicesTable/SelectMechanic";
import SelectService from "../components/OrderServicesTable/SelectService";
import { ContextData } from "../context/ContextData";

function StartOs() {
  const { name, car } = useParams();
  const { handleCurrentCustomer } = useContext(ContextData);

  useEffect(() => {
    const currentCustomer = {
      os: Math.floor(Math.random() * 101),
      name,
      car,
      mechanic: '',
    }
    handleCurrentCustomer(currentCustomer);
  }, [])

  return (
    <Box>
      <OrderServicesHeader />
      <Box sx={{ display: 'flex' }}>
        <SelectMechanic />
        <SelectService />
      </Box>
    </Box>
  )
}

export default StartOs;
