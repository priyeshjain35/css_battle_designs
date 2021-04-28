import { 
    Link,
    BrowserRouter as Router
} from "react-router-dom";
import "./__dropdown.scss";

const Dropdown = ({menu, title}) => {
    
    return(
        <div className="menu">
            <Router>
                {menu.map((item, index) => <Link to={`/${title && typeof(title) === "string" && title.split(" ").join("")}/${item['component']}/${item['Battle No.']}`} 
                    className="menu-item" key={`${item.MenuName}_${index}`}>
                        {item.MenuName}
                    </Link>
                )}
            </Router>
        </div>
    );
}

export default Dropdown;