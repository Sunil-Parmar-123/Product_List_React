// import Navbarr from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './Components/SearchBar';
import CountryCards from './Components/CountryCards';
import { useState } from 'react';
// import './App.css'
// import './index.css'

function Home() {
  const [query,setQuery] = useState('');
  return (
    <>
    {/* <Navbarr/> */}
    <SearchBar setQuery={setQuery}/>
    <CountryCards query={query}/>
    </>
  )
}

export default Home
