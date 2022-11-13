import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import {useState, useEffect} from "react";
import axios from "axios";

const client = axios.create({
  baseURL: "https://restcountries.com/v3.1/"
})
function App() {
  const [filterCountries, setFilterCountries] = useState({filterName: "", filterRegion: ""});
  const [allCountries, setAllCountries] = useState([]);
  
  useEffect(()=>{
    client.get("all").then(res =>{
      setAllCountries(res.data);
    })
  }, []);

  return (
    <div className="App">
      <Header/>
      <main style={{padding: "0 20px"}}>
        <SearchBar/>
        <div className="card__container">
          {allCountries.map(country=>
            <Card key={country.name.common} countryInfo={country}/>
          )}

        </div>
      </main>
    </div>
  );
}

export default App;
