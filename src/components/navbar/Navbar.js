import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=''
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            KIMA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button style={{borderRadius: "40% 40% 40% 40%"}} color="inherit">Opt-1</Button>
          <Button style={{borderRadius: "40% 40% 40% 40%"}} color="inherit">Opt-2</Button>
          <Button style={{borderRadius: "40% 40% 40% 40%"}} color="inherit">Opt-3</Button>
          </Box>  
          <Button style={{borderRadius: "40% 40% 40% 40%"}} color="inherit">REGISTER</Button>
          <Button style={{borderRadius: "40% 40% 40% 40%"}} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
