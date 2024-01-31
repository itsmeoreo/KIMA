import { Box, Grid } from '@mui/material'
import React from 'react'
import './ItemCard.css'

function ItemCard(props) {
  console.log(props.name);
  return (

    <Box sx={{ flexGrow: 1 }}>
      <Grid columnSpacing={3} className='css-item-card'>
        <Grid xs={6} className="css-itemname-type css-itemcard-content">
          <h2 className='css-itemcard-itemname'>{props.data.name}</h2>
          <p className='css-itemcard-itemtype'>{props.data.type}</p>
        </Grid>
        <Grid xs="auto" className='css-itemquantity-manage css-itemcard-content'>
          <p className='css-itemcard-itemquantity'><strong>{props.data.quantity}</strong></p>
          <button className='css-itemcard-itemmanage'>manage</button>
        </Grid>
      </Grid>
    </Box>

  )
}

export default ItemCard