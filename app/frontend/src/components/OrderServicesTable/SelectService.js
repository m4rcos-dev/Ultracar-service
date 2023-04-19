import { TextField } from "@mui/material"
import { useContext, useState } from "react";
import { ContextConfig } from "../../context/ContextConfig";
import { servicesData } from "../../data/ServiceData"
import { Autocomplete } from "./SelectMechanicStyle";

function SelectService() {
  const { valueContext } = useContext(ContextConfig);
  const openMenu = valueContext.openMenu;
  const [service, setService] = useState('');
  console.log(service);

  const handelService = (event) => {
    setService(event.target.textContent);
  }

  return (
    <Autocomplete
      disablePortal
      onChange={(e) => handelService(e)}
      id="combo-box-demo"
      options={servicesData}
      sx={{ marginLeft: openMenu ? 30 : 10 }}
      renderInput={(params) => <TextField {...params} label="Serviço" />}
    />
  )
}

export default SelectService;
