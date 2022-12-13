import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import {useState} from "react";
import {Filters} from './types';
import CardContainer from "./components/CardContainer";

function App() {
  const [filterCountries, setFilterCountries] = useState<Filters>({filterName: "", filterRegion: ""});

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
        <CardContainer filterCountries={filterCountries}/>
      </main>
    </div>
  );
}

export default App;
