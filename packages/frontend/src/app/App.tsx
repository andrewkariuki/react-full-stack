import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Patients } from "../screens";
// import { globalStyles } from "../styles/global";

class App extends React.Component {
  render() {
    const navigation = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<Patients />} />
      </Routes>
    );
    return <>{navigation}</>;
  }
}

export default App;
