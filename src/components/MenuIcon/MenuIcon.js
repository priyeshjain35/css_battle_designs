
import "./MenuIcon.scss";

const MenuIcon = ({toggledClass, toggle}) => {

    return (
        <div className={`menu-icon ${toggledClass ? "change" : ""}`}
            onClick={toggle}
        >
            <div className="bar-1"></div>
            <div className="bar-2"></div>
            <div className="bar-3"></div>
        </div>
    )
}

export default MenuIcon;