import { styled } from '@mui/material';
import MuiAutocomplete from '@mui/material/Autocomplete';

export const Autocomplete = styled(MuiAutocomplete)(() => ({
  width: 300,
  marginTop: 10,

  '@media (max-width: 600px)': {
    flexDirection: 'column',
    marginLeft: 35,
  }
}));
