import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { ref, onValue, child } from "firebase/database";
import "../PopUp.css";

const Dashboard = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const dbRef = ref(db);
    const users = [];
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((child) => {
        const key = child.key;
        const data = child.val();
        users.push(data);
      });
      setUsers(users);
    });
  }, []);

  return (
    <div className="dashboard">
      <div className="col text-center">
        <h3 className="dashboard-heading">Dashboard</h3>
        <table className="table table-striped align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {true &&
              users.map((user) => (
                <tr key={Math.random()}>
                  <td>
                    <p className="fw-normal mb-0">{user.firstName}</p>
                  </td>
                  <td>
                    <p className="fw-bold mb-1">{user.lastName}</p>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{user.email}</p>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <br />
      <div className="col text-center">
        <button
          className="btn btn-outline-primary fw-bold close-dashboard"
          onClick={() => props.onClose(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
