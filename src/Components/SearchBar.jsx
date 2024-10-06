import React from 'react'
import style from"./SearchBar.module.css"
import Dropdown from './Dropdown'
// console.log(style)

function SearchBar({setQuery}) {
  return (
    <> 
    <div className={style.search}>
       <div className={style.container} >   
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="search" placeholder='Search any Country'onChange={(e) =>setQuery(e.target.value.toLowerCase())} name="" id="" />
    </div>
    <Dropdown setQuery={setQuery}/>
    </div>
    </>

  )
}
export default SearchBar
