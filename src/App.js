import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import {useState, useEffect, useRef} from "react";
import axios from "axios";

const client = axios.create({
  baseURL: "https://restcountries.com/v3.1/"
})
function App() {
  const [filterCountries, setFilterCountries] = useState({filterName: "", filterRegion: ""});
  const [allCountries, setAllCountries] = useState([]);
  const fetchDataRef = useRef(false);

  useEffect(()=>{
    if(!fetchDataRef.current){
      client.get("all").then(res =>{
        setAllCountries(res.data);
      }).catch(error => console.log(error))
      fetchDataRef.current = true;
    }
  }, []);

  const handleFilterName = function (text){
    setFilterCountries((prevState) => ({...prevState, filterName: text}))
  }
  
  const handleFilterRegion = function(region){
    setFilterCountries((prevState) => ({...prevState, filterRegion: region}))
  }

  
  return (
    <div className="App">
      <Header/>
      <main className="main__app">
        <SearchBar onFilterNameChange = {handleFilterName} onFilterRegionChange = {handleFilterRegion}/>
        <div className="card__container">
          {allCountries.map(country =>{
            const queryName = filterCountries.filterName?.toLowerCase()
            const queryRegion = filterCountries.filterRegion?.toLowerCase();
            
            if(country.name.common.toLowerCase().includes(queryName) && country.region.toLowerCase().includes(queryRegion)){
              return <Card key={country.name.common} countryInfo={country}/>
            }
            return null;
            }
          )}

        </div>
      </main>
    </div>
  );
}

export default App;
