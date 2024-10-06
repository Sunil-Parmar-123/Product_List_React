import React, { useState ,useEffect} from "react";
import Card from "./Card";
// import countries from "../countries";
import axios from "axios";
import style from "./CountryCards.module.css";
import CountryShimmer from "./CountryShimmer";

function CountryCards({query}) {
    const [countries,setCountries] = useState([])

    const Url = "https://freetestapi.com/api/v1/countries";

    useEffect  (() => {const handle = async () => {
        let api = await axios.get(Url);
        // console.log(api.data)
         setCountries(api.data)
    }
    handle()
    },[]
    )
    // console.log(countries)
    if(!countries.length){
     return <div className={style.cards}><CountryShimmer/></div>
    }
  return (
    <>
      <div className={style.cards}>
        {countries.filter((country) =>country.name.toLowerCase().includes(query)).map((country) => {
          // console.log(country);
          return (
            <Card
              name={country.name}
              popu={country.population}
              flag={country.flag}
              curr={country.currency}
              key={country.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default CountryCards;
