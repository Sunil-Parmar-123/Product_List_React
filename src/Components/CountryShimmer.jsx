import React from 'react'
// import style from "./CountryCards.module.css";
import style from './Card.module.css';

function CountryShimmer() {
    // let newArr = new Array(12).fill(undefined).map((val,i) =><div key={i} className={style.bg}></div>)
    
    // console.log(newArr)

    let newArr = Array.from({length:12}).map((el,i) => {
        return <div key={i} className={style.bg}></div>  
    })
  return (
    <div>
      {newArr}      
    </div>
  )
}

export default CountryShimmer
