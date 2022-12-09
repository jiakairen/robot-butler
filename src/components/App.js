import React, { useState } from "react";
import Navbar from "./home/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "./home/Alert";
import "./home/main.css";
import Footer from "./footer/Footer";
import PopUp from "./Popup";
import Dashboard from "./Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "../pages/Signup";

function App() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [dashboardVisible, setDashboardVisible] = useState(false);
  const showPopup = (bool) => {
    setPopupVisible(bool);
  };
  const showDashboard = (bool) => {
    setDashboardVisible(bool);
  };

  const renderPopup = () => {
    if (popupVisible) {
      return <PopUp onClose={showPopup} />;
    }
    return;
  };

  const renderDashboard = () => {
    if (dashboardVisible) {
      return <Dashboard onClose={showDashboard} />;
    }
    return;
  };

  const blurHome = () => {
    if (popupVisible || dashboardVisible) {
      return "outer-app outer-app-blur";
    } else {
      return "outer-app";
    }
  };

  return (
    <div className="container ">
      <div className={blurHome()}>
        <div className="App">
          <Navbar onSubscribe={showPopup} onDashboard={showDashboard} />
          {/* <Alert /> */}
          <h1>main coming soon </h1>
        </div>
        <Footer />
      </div>
      <div className="pop-up">{renderPopup()}</div>
      <div className="pop-up">{renderDashboard()}</div>
    </div>
  );
}

export default App;
