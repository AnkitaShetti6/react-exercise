import React from "react";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import Content from "./components/Content";

function App() {
  return (
    <div className="App" style={appStyle}>
      <HeaderComponent />
      <main style={mainStyle}>
        <Content />
      </main>
      <FooterComponent />
    </div>
  );
}
const appStyle: React.CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const mainStyle: React.CSSProperties = {
  flex: 1,
  padding: "20px",
};

export default App;
