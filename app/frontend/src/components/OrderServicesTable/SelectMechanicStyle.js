import { styled } from '@mui/material';
import MuiAutocomplete from '@mui/material/Autocomplete';

export const Autocomplete = styled(MuiAutocomplete)(() => ({
  width: 300,
  marginTop: 10,
  marginRight: 40,

  '@media (max-width: 600px)': {
    flexDirection: 'column',
    marginLeft: 35,
  }
}));

export const Box = styled('div')(() => ({
  display: 'flex',

  '@media (max-width: 600px)': {
    flexDirection: 'column',
    marginLeft: 35,
  }
}));
