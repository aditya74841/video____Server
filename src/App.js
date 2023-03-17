
// eslint-disable-next-line
import React from "react";
import { Routes, Route } from "react-router-dom";

import SignIn from './components/Form/SignIn/SignIn'

import SignUp from './components/Form/SignUp/SignUp'


function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/signIn" element={<SignIn />} />
        <Route exact path="/signUp" element={<SignUp />} />

      </Routes>
    </React.Fragment>
  );
}

export default App;
