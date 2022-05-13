import React from "react";
import ReactDOM from "react-dom";
import Join from "./components/join";
import "../assets/stylesheets/application.scss";

const App = () => {
  return (
    <Join />
  );
};

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(<App />, root);
}
