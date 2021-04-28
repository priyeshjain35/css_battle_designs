import MenuIcon from "../MenuIcon/MenuIcon";
import AsideMenu from "../../ModelData/AsideMenu";
import Dropdown from "../Dropdown/Dropdown";
import "./__AsideContainer.scss";

const AsideContainer = ({clickMenuIcon, isExpanded}) => {

    const getDropdown = (menu, header, index) => {
        return (
            <div className="nav-menu" key={`${header}_${index}`}>
                <span>{header}</span>
                <Dropdown menu={menu} title={header}/>
            </div>
        )
    }

    return(
        <div className={`sidenav ${isExpanded ? 'expanded' : ''}`} onClick={clickMenuIcon}>
            <div className="close-btn">
                <MenuIcon toggle={clickMenuIcon} toggledClass={isExpanded}/>
            </div>
            {AsideMenu.map((item, index) => getDropdown(Object.values(item)[0], Object.keys(item)[0], index))}
        </div>
    )
}

export default AsideContainer;