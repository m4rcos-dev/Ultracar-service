import { TextField } from "@mui/material";
import { useContext } from "react";
import { ContextConfig } from "../../context/ContextConfig";
import { ContextData } from "../../context/ContextData";
import { mechanicData } from "../../data/MechanicData"
import { Autocomplete } from "./SelectMechanicStyle";

function SelectMechanic() {
  const { valueContext } = useContext(ContextConfig);
  const openMenu = valueContext.openMenu;
  const {contextData, handleCurrentCustomer} = useContext(ContextData);

  const handelMechanic = (event) => {
    const targetMechanic = event.target.textContent
    const currentMechanic = {
      ...contextData.currentCustomer,
      mechanic: targetMechanic,
    }
    handleCurrentCustomer(currentMechanic);
  }

  return (
    <Autocomplete
      disablePortal
      onChange={(e) => handelMechanic(e)}
      id="combo-box-demo"
      options={mechanicData}
      sx={{ marginLeft: openMenu ? 30 : 10 }}
      renderInput={(params) => <TextField {...params} label="Mecânico" />}
    />
  )
}

export default SelectMechanic
