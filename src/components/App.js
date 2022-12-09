import React from "react";
import Navbar from './home/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from './home/Alert'
import './home/main.css'
import Footer from "./footer/Footer";
import PopUp from "./Popup";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "../pages/Signup";
import Background from "./home/Background";



function App() {
  return ( 
    <div className="container "> 
      <div className="App">
        <Navbar />
        <Background/>

      
            {/* <h1>Hello User </h1>  
            <PopUp />    */}
            
      </div>
        <Footer/>
       
    </div>  
  );
}

export default App;
