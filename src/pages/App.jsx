import React from "react";
// import "../CSS/App.css";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./LoginPage";
import Homepage from "./Homepage";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" component={LoginPage}></Route>
        <Route path="/homepage" component={Homepage}></Route>
      </Routes>
    </>
  );
};
export default App;
