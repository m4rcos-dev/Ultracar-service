import { styled } from '@mui/material';
import MuiList from '@mui/material/List';

export const List = styled(MuiList)(({theme}) => ({
  display: 'flex',
  width: '100%',
  maxWidth: 1000,
  backgroundColor: theme.palette.secondary.main,
}));
