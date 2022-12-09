import React from "react";
import "../PopUp.css";

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <button onClick={() => props.onClose(false)}>Close</button>
    </div>
  );
};

export default Dashboard;
