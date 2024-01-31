import { Box, Grid } from '@mui/material'
import React from 'react'
import './ItemCard.css'

function ItemCard() {
  return (

    <Box sx={{ flexGrow: 1 }}>
      <Grid columnSpacing={3} className='css-item-card'>
        <Grid xs={6} className='css-itemcard-content'>
          <h2>Carrot</h2>
          <p>Vegetable</p>
        </Grid>
        <Grid xs="auto" className='css-itemquantity-manage css-itemcard-content'>
          <p><strong>8 kg</strong></p>
          <button>manage</button>
        </Grid>
      </Grid>
    </Box>

  )
}

export default ItemCard