import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleHalfStroke} from '@fortawesome/free-solid-svg-icons';

function Header (){
    return(
        <header className="header">
            <h1 className="header__logo">Country<span>Finder</span></h1>
            <FontAwesomeIcon className="header__themeicon" icon={faCircleHalfStroke} />
        </header>
    )
}

export default Header;