import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import CountryDataShimmer from './CountryDataShimmer';

function CountryData() {
  // const countryname = new URLSearchParams(location.search).get('name');
  const countryname = useParams();
  const country = countryname.country;

  // console.log(countryname)
  const [data,setData] = useState([])
  const [error,SetError] = useState(false)
  
  const Url = `https://freetestapi.com/api/v1/countries?search=${country}`

  useEffect (() => {
    try {
    let api = async () => {
      let api = await axios.get(Url);
      if(country===api.data[0].name){
        setData(api.data[0])
        // console.log(api.data[0])
      }else {
        SetError(true)  
      }
      } }catch(err) {
      console.log("something went wrong",err);
      // console.log("hello")
      SetError(true)
    }
  
  api();
  
  },[country]) 
  
  console.log(data);
  if(error){
   return <h1>Country Not Found????</h1>
  }
  if(data.length===0){
    return <CountryDataShimmer/>
  }
  
  // return data === null ? "LODING ......":
  return(
    <>
    <button onClick={() => history.back()}>Back</button>
    <div>
      <h1>{data.name}</h1>
      <p>Currency :-{data.currency}</p>
      <p>Capital :-{data.capital}</p>
      <p>Density :-{data.density}</p>
      <p>Land_area :-{data.land_area}</p>
      <p>Population :-{data.population}</p>
    </div>
    
    </>
  )
}

export default CountryData
