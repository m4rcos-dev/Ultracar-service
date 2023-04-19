import { Input, InputAdornment, TextField } from "@mui/material"
import { useContext, useState } from "react";
import { ContextConfig } from "../../context/ContextConfig";
import { servicesData } from "../../data/ServiceData"
import { Autocomplete, Box } from "./SelectMechanicStyle";

function SelectService() {
  const { valueContext } = useContext(ContextConfig);
  const openMenu = valueContext.openMenu;
  const [service, setService] = useState('');
  const [cost, setCost] = useState('');
  console.log(service);

  const handelService = (event) => {
    setService(event.target.textContent);
  }

  const handelCost = ({target: { value }}) => {
    setCost(value)
  };

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
    </Box>
  )
}

export default SelectService;
