import React, { useEffect } from "react";
import "./styles.css";
// import Button from "./Component/Button";
import CustomHooks from "./Component/Hooks";
import GithubSearchHooks from "./Component/GithubSearchHooks";
import axios from "axios";

export default function App() {
  return (
    <div className="App">
      <h1>useContext Hooks</h1>
      <br />
      <GithubSearchHooks />
    </div>
  );
}
