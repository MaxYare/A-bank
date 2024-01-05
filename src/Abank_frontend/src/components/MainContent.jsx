import React from "react";
import Heading from "./Heading";
import Sidebar1 from "./Sidebar-1";
import Sidebar2 from "./Sidebar-2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeaturesField from "./FeaturesField";
import Test from "./Test";
import UseCasesField from "./UseCasesField";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar2 />
        <Heading />
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route path="/" element={<FeaturesField />} />
          <Route path="/UseCasesField" element={<UseCasesField />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
