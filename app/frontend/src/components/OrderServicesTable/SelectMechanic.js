import { Autocomplete, TextField } from "@mui/material"
import { mechanicData } from "../../data/MechanicData"

function SelectMechanic() {
  return (
    <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={mechanicData}
    sx={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Mecânico" />}
  />
  )
}

export default SelectMechanic
