import { useRef, useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';

function Card({countryInfo}){
  const sectionRef = useRef()
  const [iconRotation, setIconRotation] = useState(0);
  const expandCard = ()=>{
    sectionRef.current.classList.toggle("card--expand");
    setIconRotation((prev) => Math.abs(prev-180));
  }

    return(
        <section ref={sectionRef} onClick={expandCard} className="card">
            <div className="card__header">
              <img className="card__flag" src={countryInfo.flags.svg} alt={`${countryInfo.name.common} Flag`}/>
              <h1 className="card__name">{countryInfo.name.common}</h1>
              <FontAwesomeIcon className="card__dropdown" icon={faCaretDown} rotation={iconRotation}/>
            </div>
            <p><b>Population:</b> {countryInfo.population}</p>
            <p><b>Capital:</b> {countryInfo.capital}</p>
            <p><b>Region:</b> {countryInfo.region}</p>
          </section>
    )
}

export default Card;