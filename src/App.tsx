import React from "react";
//import Front from "./Components/1stPage/Front_Page/FrontPage";
import Page2nd from "./Components/2ndPage/MainPage/MainPage"
import "./App.css";


const App: React.FC =() => {
  return (
    <div className="App">
        {/* <Front color="White" /> */}
        <Page2nd color="Black" />
    </div>
  );
};

export default App;

