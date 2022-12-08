import React from "react";
import Navbar from './home/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from './home/Alert'
import './home/main.css'
import Footer from "./footer/Footer";



function App() {
  return ( 
    <div className="container "> 
      <div className="App">
        <Navbar />
          {   /* <Alert /> */}
            <h1>main coming soon </h1>      
      </div>
        <Footer/>
    </div>  
  );
}

export default App;
