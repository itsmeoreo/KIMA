import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function SearchField() {
  const theme = createTheme({
    palette: {
      darkcyan: {
        main: '#008B8B',
        light: '#008B8B',
        dark: '#008B8B',
        contrastText: '#ffffff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SearchIcon className='css-search-icon' sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Search" variant='standard' color='darkcyan' />
      </Box>
    </ThemeProvider>
  );
}