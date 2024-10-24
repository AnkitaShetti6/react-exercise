import React from "react";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import Content from "./components/Content";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AvailableScreen from "./components/AvailableScreen";
import PetDetails from "./components/PetDetails";

function App() {
  return (
    <div className="App" style={appStyle}>
      <Router>
        <HeaderComponent />

        <Routes>
          <Route path="/" element={<Content />} />
          <Route
            path="available-screen/:option"
            element={
              <AvailableScreen
                apiEndpoint="https://660579c92ca9478ea1806a31.mockapi.io/api/v1/pets"
              />
              
            }
          />
           <Route path="pet/:id" element={ <PetDetails apiEndpoint="https://660579c92ca9478ea1806a31.mockapi.io/api/v1/pets"/>} />
        </Routes>

        <FooterComponent />
      </Router>
    </div>
  );
}
const appStyle: React.CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export default App;
