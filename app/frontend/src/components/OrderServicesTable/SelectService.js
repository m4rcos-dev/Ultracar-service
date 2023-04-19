import { Button, Input, InputAdornment, TextField } from "@mui/material"
import { useContext, useEffect, useState } from "react";
import { ContextConfig } from "../../context/ContextConfig";
import { servicesData } from "../../data/ServiceData"
import { Autocomplete, Box } from "./SelectMechanicStyle";
import AddchartIcon from '@mui/icons-material/Addchart';
import { ContextData } from "../../context/ContextData";

function SelectService() {
  const { valueContext } = useContext(ContextConfig);
  const openMenu = valueContext.openMenu;
  const { contextData, handleCurrentService } = useContext(ContextData);
  const currrentMechanic = contextData.currentCustomer.mechanic;
  const [service, setService] = useState('');
  const [cost, setCost] = useState('');
  const [disabled, setDisabled] = useState(true)
  const [disabledFinal, setDisabledFinal] = useState(true);
  const currentService = contextData.currentService

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
      if(currentService.length > 1) setDisabledFinal(false);
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
        disabled={disabled}
        variant="contained"
        endIcon={<AddchartIcon />}
        // sx={button}
        onClick={addService}
      >
        Adicionar Serviço
      </Button>
      <Button
        disabled={disabledFinal}
        variant="contained"
        endIcon={<AddchartIcon />}
      // sx={button}
      // onClick={() => handleModalGerate(true)}
      >
        Concluir
      </Button>
    </Box>
  )
}

export default SelectService;
