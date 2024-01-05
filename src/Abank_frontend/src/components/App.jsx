import React from "react";
import Heading from "./Heading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeaturesField from "./FeaturesField";
import Test from "./Test";
import UseCasesField from "./UseCasesField";
import SidebarColor from "./SidebarColors";
import Tabs from "./Tabs";
import SignIn from "./SignIn";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <SidebarColor />
        {/* <Heading /> */}
        <div style={{ padding: "10px" }}>
          <Tabs />
          <SignIn />
        </div>
        {/* <Routes>
          <Route path="/test" element={<Test />} />
          <Route path="/" element={<FeaturesField />} />
          <Route path="/UseCasesField" element={<UseCasesField />} />
        </Routes> */}
      </BrowserRouter>
    );
  }
}

export default App;
