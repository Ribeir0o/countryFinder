function Card({countryInfo}){
    return(
        <section className="card">
            <div className="card__header">
              <h1 className="card__name">{countryInfo.name.common}</h1>
              <img className="card__flag" src={countryInfo.flags.svg} alt="país flag"/>
            </div>
            <p><b>Population:</b> {countryInfo.population}</p>
            <p><b>Capital:</b> {countryInfo.capital}</p>
            <p><b>Region:</b> {countryInfo.region}</p>
          </section>
    )
}

export default Card;