import "./Header.scss";
import MenuIcon from  "../MenuIcon/MenuIcon";

const Header = ({onMenuClick, isMenuIconClicked}) => {
    return (
        <header>
            <MenuIcon toggle={onMenuClick} toggledClass={isMenuIconClicked} />
            <img src="favicon.ico" alt="Css Desings"/>
        </header>
    )
}

export default Header;