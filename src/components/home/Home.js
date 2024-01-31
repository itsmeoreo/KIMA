import React from 'react'
import ItemCard from '../cards/ItemCard.js'
import FilterField from '../filterField/FilterField.js'
import ButtonAppBar from '../navbar/Navbar.js'
import SearchField from '../searchField/SearchField.js'
import './Home.css'
import {Data} from '../../services/data.js'

const data= Object.values(Data).flat();
console.log(data);

function Home() {
  return (
    <div>
      <ButtonAppBar />
      <div className='search-filter-field'>
        <SearchField />
        <FilterField />
      </div>
      <div className='main-container' >
        {
          data.map((essentials)=>(
            <ItemCard key={essentials.id} data={essentials} />
          ))
        }
      </div>
    </div>
  )
}

export default Home