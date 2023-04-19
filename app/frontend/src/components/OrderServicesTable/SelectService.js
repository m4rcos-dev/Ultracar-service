import { Autocomplete, TextField } from "@mui/material"
import { servicesData } from "../../data/ServiceData"

function SelectService() {
  return (
    <Autocomplete
      disablePortal
      // onChange={(e) => handelMechanic(e)}
      id="combo-box-demo"
      options={servicesData}
      // sx={{ marginLeft: openMenu ? 30 : 10 }}
      renderInput={(params) => <TextField {...params} label="Mecânico" />}
    />
  )
}

export default SelectService;
