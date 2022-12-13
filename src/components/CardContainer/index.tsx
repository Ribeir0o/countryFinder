import useFetch from "../../hooks/useFetch";
import { Country, Filters } from "../../types";
import Card from "../Card";


type CardContainerProps = {
    filterCountries: Filters | undefined
}

function CardContainer ({filterCountries}: CardContainerProps){
    const data = (useFetch<Country[]>('https://restcountries.com/v3.1/all') as Country[])

    return(
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
    )
}

export default CardContainer;