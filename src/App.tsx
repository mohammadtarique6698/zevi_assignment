import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Front from "./Components/1stPage/Front_Page/FrontPage";
import Page2nd from "./Components/2ndPage/MainPage/MainPage";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Front color="White" />} />
          <Route path="/page2nd" element={<Page2nd color="Black" />} />
        </Routes>
      </div>
    </Router>
=======
//import Front from "./Components/1stPage/Front_Page/FrontPage";
import Page2nd from "./Components/2ndPage/MainPage/MainPage"
import "./App.css";


const App: React.FC =() => {
  return (
    <div className="App">
        {/* <Front color="White" /> */}
        <Page2nd color="Black" />
    </div>
>>>>>>> 3a9bd95aeaa6b908b0131a242b9c448e4818602e
  );
};

export default App;
<<<<<<< HEAD
=======

>>>>>>> 3a9bd95aeaa6b908b0131a242b9c448e4818602e
