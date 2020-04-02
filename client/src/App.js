import React from "react";
import "./App.css";
import Jobs from "./Jobs";

const jobs = [
  {title : "sw 1 ", company: "google"},
  {title : "sw 1 ", company: "google"},
  {title : "sw 1 ", company: "google"},
  {title : "sw 1 ", company: "google"}
]
function App() {
  return (
    <div className="App">
      <Jobs jobs={jobs}></Jobs>
    </div>
  );
}

export default App;
