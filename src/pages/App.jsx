import React from "react";

import { Route, Routes } from "react-router-dom";

import LoginPage from "./LoginPage";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Account from "./Account";
import Update from "./Update";
const App = () => {
  return (
    <>
      <div className="flex">
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route exact path="/homepage" element={<Homepage />}></Route>
          <Route exact path="/Dashboard" element={<Homepage />}></Route>
          <Route exact path="/Inbox" element={<Update />}></Route>
          <Route exact path="/Accounts" element={<Account />}></Route>
          <Route exact path="/Schedule" element={<Update />}></Route>
          <Route exact path="/Search" element={<Homepage />}></Route>
          <Route exact path="/Analytics" element={<Homepage />}></Route>
          <Route exact path="/Files" element={<Homepage />}></Route>
          <Route exact path="/Setting" element={<LoginPage />}></Route>
        </Routes>
      </div>
    </>
  );
};
export default App;
