import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import {useState} from "react";
import useFetch from "./hooks/useFetch";
import {Filters, Country} from './types';

function App() {
  const [filterCountries, setFilterCountries] = useState<Filters>();
  const data = (useFetch<Country[]>('https://restcountries.com/v3.1/all') as Country[])

  const handleFilterName = function (text: string){
    setFilterCountries((prevState) => ({filterRegion: (prevState as Filters).filterRegion, filterName: text}))
  }
  
  const handleFilterRegion = function(region: string){
    setFilterCountries((prevState) => ({filterName: (prevState as Filters).filterName, filterRegion: region}))
  }
  
  return (
    <div className="App">
      <Header/>
      <main className="main__app">
        <SearchBar onFilterNameChange = {handleFilterName} onFilterRegionChange = {handleFilterRegion}/>
        <div className="card__container">
          {data?.map(country =>{
            const queryName = filterCountries?.filterName?.toLowerCase()
            const queryRegion = filterCountries?.filterRegion?.toLowerCase();
            
            if(country.name.common.toLowerCase().includes((queryName as string)) && country.region.toLowerCase().includes((queryRegion as string))){
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
