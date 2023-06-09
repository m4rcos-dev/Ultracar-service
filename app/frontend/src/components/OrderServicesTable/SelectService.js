import { Button, Input, InputAdornment, TextField } from "@mui/material"
import { useContext, useEffect, useState } from "react";
import { ContextConfig } from "../../context/ContextConfig";
import { servicesData } from "../../data/ServiceData"
import { Autocomplete, Box } from "./SelectMechanicStyle";
import AddchartIcon from '@mui/icons-material/Addchart';
import { ContextData } from "../../context/ContextData";
import { useNavigate } from 'react-router-dom';

function SelectService() {
  const { valueContext } = useContext(ContextConfig);
  const openMenu = valueContext.openMenu;
  const { contextData, handleCurrentService, handleOrdersServices } = useContext(ContextData);
  const currrentMechanic = contextData.currentCustomer.mechanic;
  const [service, setService] = useState('');
  const [cost, setCost] = useState('');
  const [disabled, setDisabled] = useState(true)
  const [disabledFinal, setDisabledFinal] = useState(true);
  const currentService = contextData.currentService;
  const navigate = useNavigate();

  const handelService = (event) => {
    setService(event.target.textContent);
  }

  const handelCost = ({ target: { value } }) => {
    setCost(value)
  };

  const addService = () => {
    handleCurrentService({
      service,
      cost,
    })
  }

  const addOs = () => {
    const currentOs = contextData.currentCustomer;
    handleOrdersServices(currentOs)
    navigate('/orders');
  };

  useEffect(() => {
    const isDisable = () => {
      if (
        currrentMechanic.length > 0
        && service.length > 0
        && cost.length > 0) setDisabled(false);
    }
    isDisable();
  }, [currrentMechanic, service, cost]);

  useEffect(() => {
    const isDisableFinal = () => {
      if (currentService.length > 1) setDisabledFinal(false);
    }
    isDisableFinal();
  }, [currentService])


  return (
    <Box>
      <Autocomplete
        disablePortal
        onChange={(e) => handelService(e)}
        id="combo-box-demo"
        options={servicesData}
        sx={{ marginLeft: openMenu ? 30 : 10 }}
        renderInput={(params) => <TextField {...params} label="Serviço" />}
      />
      <Input
        id="standard-adornment-amount"
        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        value={cost}
        onChange={handelCost}
      />
      <Button
        sx={{ width: 200, marginLeft: 2, marginRight: 2 }}
        disabled={disabled}
        variant="contained"
        endIcon={<AddchartIcon />}
        // sx={button}
        onClick={addService}
      >
        Adicionar Serviço
      </Button>
      <Button
        sx={{ width: 200, marginLeft: 2, marginRight: 2 }}
        disabled={disabledFinal}
        variant="contained"
        endIcon={<AddchartIcon />}
        // sx={button}
        onClick={addOs}
      >
        Concluir
      </Button>
    </Box>
  )
}

export default SelectService;
