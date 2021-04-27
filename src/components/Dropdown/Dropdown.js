import "./__dropdown.scss";

const Dropdown = ({menu}) => {
    return(
        <div className="menu">
            {menu.map((item, index) => <div className="menu-item" key={`${item.MenuName}_${index}`}>{item.MenuName}</div>)}
        </div>
    );
}

export default Dropdown;