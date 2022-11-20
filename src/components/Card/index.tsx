import { useRef } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import type { Country } from '../../App';


type CardProps = {
  countryInfo: Country;
}

function Card({countryInfo}: CardProps){
  const sectionRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);
  const expandCard = ()=>{
    sectionRef.current?.classList.toggle("card--expand");
    iconRef.current?.classList.toggle("fa-rotate-180")
  }

    return(
        <section ref={sectionRef} onClick={expandCard} className="card">
            <div className="card__header">
              <img className="card__flag" src={countryInfo.flags.svg} alt={`${countryInfo.name.common} Flag`}/>
              <h1 className="card__name">{countryInfo.name.common}</h1>
              <FontAwesomeIcon ref={iconRef} className="card__dropdown" icon={faCaretDown}/>
            </div>
            <p><b>Population:</b> {countryInfo.population.toLocaleString('pt-BR')}</p>
            <p><b>Capital:</b> {countryInfo.capital}</p>
            <p><b>Region:</b> {countryInfo.region}</p>
          </section>
    )
}

export default Card;