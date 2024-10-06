import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';


function Card({name,popu,flag,curr}) {

  return (
    <>
    <Link 
    to={`/${name}`}
    // to={`/country?name=${name}`}
    >
    <div className={style.container}>
      <div className={style.imgcontainer} >
      <img className={style.img} src={flag} alt="" />
      </div>
      <div className={style.details}>
      <p><b>Country Name</b> - {name}</p>
      <p><b>Currency</b> - {curr}</p>
      <p><b>Population</b> - {popu.toLocaleString('en-IN')}</p>
      </div>
    </div>
    </Link>
    </>
  )
}
export default Card
