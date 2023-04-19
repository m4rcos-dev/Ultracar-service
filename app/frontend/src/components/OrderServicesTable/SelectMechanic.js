import { TextField } from "@mui/material";
import { useContext } from "react";
import { ContextConfig } from "../../context/ContextConfig";
import { mechanicData } from "../../data/MechanicData"
import { Autocomplete } from "./SelectMechanicStyle";

function SelectMechanic() {
  const { valueContext } = useContext(ContextConfig);
  const openMenu = valueContext.openMenu;

  return (
    <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={mechanicData}
    sx={{ marginLeft: openMenu ? 30 : 10 }}
    renderInput={(params) => <TextField {...params} label="Mecânico" />}
  />
  )
}

export default SelectMechanic
