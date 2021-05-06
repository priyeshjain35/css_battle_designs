import { useState } from "react";
import './__App.scss';

import Header from "../Header/Header";
import MainContainer from "../MainContainer/MainContainer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  
  const [isMenuIconClicked, setMenuIconClicked] = useState(false);

  const clickMenuIcon = () => setMenuIconClicked(!isMenuIconClicked);

  return (
    <Router>  
      <div className={`App ${isMenuIconClicked ? "overlay" : ""}`}>
        <Header onMenuClick={clickMenuIcon} isMenuIconClicked={isMenuIconClicked}/>
        <MainContainer onMenuClick={clickMenuIcon} isMenuIconClicked={isMenuIconClicked}/>
      </div>
    </Router>
  );
}

export default App;
