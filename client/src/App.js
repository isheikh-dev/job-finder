import React from "react";
import "./App.css";
import Jobs from "./Jobs";


const JOP_API_URL = 'http://localhost:3001/jobs'
// const jobs = [
//   { title: "sw 1 ", company: "google" },
//   { title: "sw 1 ", company: "google" },
//   { title: "sw 1 ", company: "google" },
//   { title: "sw 1 ", company: "google" }
// ];


//  fetch jobs from api 
async function fetchJobs(updateCb) {
  // fetch is build in with chrome browser
  const res = await fetch(JOP_API_URL)
  const json = await res.json()
  updateCb(json) 
}
function App() {
  //  when we use useState second arg is fun is which we can pass arg that is the new val of our state
  const [jobList, updateJobs] = React.useState([]) 
  React.useEffect(() => {
    fetchJobs(updateJobs);
  } , [])
  return (
    <div className="App">
      <Jobs jobs={jobList}> </Jobs>
    </div>
  );
}

export default App;
