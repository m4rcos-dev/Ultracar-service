import { styled } from "@mui/material";

export const Box = styled('div')(() => ({
  position: 'absolute',
  top: '20%',
  left: '40%',

  '@media (max-width: 600px)': {
    left: '-10%'
  }
}));
