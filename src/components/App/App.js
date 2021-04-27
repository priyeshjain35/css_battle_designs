import { useState } from "react";
import './__App.scss';

import Header from "../Header/Header";
import MainContainer from "../MainContainer/MainContainer";

function App() {
  
  const [isMenuIconClicked, setMenuIconClicked] = useState(false);

  const clickMenuIcon = () => setMenuIconClicked(!isMenuIconClicked);

  return (
    <div className={`App ${isMenuIconClicked ? "overlay" : ""}`}>
      <Header onMenuClick={clickMenuIcon} isMenuIconClicked={isMenuIconClicked}/>
      <MainContainer onMenuClick={clickMenuIcon} isMenuIconClicked={isMenuIconClicked}/>
    </div>
  );
}

export default App;
