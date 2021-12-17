import React from "react";
import { Routes, Route } from "react-router-dom";
import { globalStyles } from "../styles/global";

class App extends React.Component {
  render() {
    const navigation = (
      <Routes>
        <Route path="/" />
      </Routes>
    );
    return (
      <>
        {globalStyles}
        {navigation}
      </>
    );
  }
}

export default App;
