import FilterAltIcon from '@mui/icons-material/FilterAlt';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/joy/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const options= [
  {type:"fruits"},
  {type:"vegetables"},
  {type:"dry fruits"},
  {type:"masala"}
]

export default function FilterField() {
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

  const [filter, setFilter] = React.useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <FilterAltIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <FormControl color='darkcyan' variant="standard" sx={{ minWidth: 150 }}>
          <InputLabel id="demo-simple-select-standard-label">Filter</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={filter}
            onChange={handleChange}
            label="Filter"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="fruits">fruits</MenuItem>
            <MenuItem value="vegetables">vegetables</MenuItem>
            <MenuItem value="dryfruits">dryfruits</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
}