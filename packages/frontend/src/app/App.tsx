import React from "react";
import { Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    const navigation = (
      <Routes>
        <Route path="/" />
      </Routes>
    );
    return <>{navigation}</>;
  }
}

export default App;
