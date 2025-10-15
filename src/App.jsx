import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Welcome from "./Pages/welcome";
import ProductTab from "./ProductTab";
import Home from "./Pages/Home";
import Journey from "./Pages/Journey";
import Approvals from "./Pages/Approvals";
import OMC from "./Pages/OMC";
import Airlines from "./Pages/Airlines";
import Static from "./Pages/Static";
import Hydrant from "./Pages/Hydrant";
import Automation from "./Pages/Automation";
import Mobile from "./Pages/Mobile";
import Safety from "./Pages/Safety";
import Sales from "./Pages/Sales";
import Documents from "./Pages/Documents";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Welcome />} />
        <Route path="/productTab" element={< ProductTab />} />
        <Route path="/home" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/Approvals" element={<Approvals />} />
        <Route path="/OMC" element={<OMC />} />
        <Route path="/Airlines" element={<Airlines />} />
        <Route path="/Static" element={<Static />} />
        <Route path="/Hydrant" element={<Hydrant />} />
        <Route path="/Automation" element={<Automation />} />
        <Route path="/Mobile" element={<Mobile />} />
        <Route path="/Safety" element={<Safety />} />
        <Route path="/Sales" element={<Sales />} />
        <Route path="/Documents" element={<Documents />} />
      </Routes>
    </Router>
  );
}

export default App;