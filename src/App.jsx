import React from "react";

import "./App.css";
import Weather from "./components/Weather";

function App() {
  return (
    <>
      <Weather />
      <p className="Footer">
        This website is coded by{" "}
        <a href="https://github.com/miss-charlotte">Charlotte Akongo</a> and
        open-sourced on{" "}
        <a href="https://github.com/miss-charlotte/new-react-app">Github</a> and
        hosted on <a href="#">Netlify</a>
      </p>
    </>
  );
}

export default App;
