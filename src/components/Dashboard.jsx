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
      <div>
        <h3>Dashboard</h3>
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
          {true &&
            users.map((user) => (
              <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            ))}
        </table>
      </div>
      <button className="close-dashboard" onClick={() => props.onClose(false)}>
        Close
      </button>
    </div>
  );
};

export default Dashboard;
