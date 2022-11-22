import React from "react";
import Name from "./Components/Name-field component/fieldName";
import Header from "./Components/Header/Header";
import Selection from "./Components/Selection component/Selection";
import Footer from "./Components/Footer/footer";
import "./Components/Header/Header.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Name />
      <Footer />
    </div>
  );
}

export default App;
