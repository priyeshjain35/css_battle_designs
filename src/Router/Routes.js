import WrappedComponent from "../components/WrappedComponent/WrappedComponent";
import Home from "../components/Home/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const Routes = () => {
    return (
        <Switch>
            <Route exact={true} path="/:battle/:component/:battle_id" component={WrappedComponent}></Route>
            <Route exact={true} path="/" component={Home} />
        </Switch>
    );
}

export default Routes;