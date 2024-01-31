import React from 'react'
import ItemCard from '../cards/ItemCard.js'
import FilterField from '../filterField/FilterField.js'
import ButtonAppBar from '../navbar/Navbar.js'
import SearchField from '../searchField/SearchField.js'
import './Home.css'

function Home() {
  return (
    <div>
      <ButtonAppBar />
      <div className='search-filter-field'>
        <SearchField />
        <FilterField />
      </div>
      <div className='main-container' >
          <ItemCard ></ItemCard>
      </div>
    </div>
  )
}

export default Home