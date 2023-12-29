import React from "react";
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
  );
};

export default App;
