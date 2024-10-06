// import React from 'react'
import style from './Dropdown.module.css';
import countries from '../countries';
// console.log(countries)

function Dropdown({setQuery}) {
  const list = countries.map((value,key) => {
    return <option value={value.name} key={value.id}>{value.name}</option>
})
  
  return (
    <div className={style.container}>
      <select onChange={(e) => setQuery(e.target.value.toLowerCase())}>
      <option value="">Select a country</option>
        {list}
      </select>
    </div>
  )
}

export default Dropdown
 