import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import OrderServicesHeader from "../components/OrderServicesTable/OrderServicesHeader";
import { ContextData } from "../context/ContextData";

function StartOs() {
  const { name, car } = useParams();
  const { handleCurrentCustomer } = useContext(ContextData);

  useEffect(() => {
    const currentCustomer = {
      name,
      car,
    }
    handleCurrentCustomer(currentCustomer)
  }, [])

  return (
    <Box>
      <OrderServicesHeader />
    </Box>
  )
}

export default StartOs;
