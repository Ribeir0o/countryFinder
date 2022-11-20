import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleHalfStroke} from '@fortawesome/free-solid-svg-icons';

function Header (){

    const toggleDarkTheme = ()=>{
        document.body.classList.toggle("dark__mode")
    }

    return(
        <header className="header">
            <h1 className="header__logo">Country<span>Finder</span></h1>
            <FontAwesomeIcon className="header__themeicon" onClick={toggleDarkTheme} icon={faCircleHalfStroke} />
        </header>
    )
}

export default Header;