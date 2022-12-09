import React from "react";
import "./footer.css";
import logo from "./logo2.png";
import Nav from "react-bootstrap/Nav";

function Footer(props) {
  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <footer className="footer">
        <div className="footer-left col-md-4 col-sm-6">
          <p className="about">
            <span> About Us</span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio quae
            consectetur fugiat soluta eius reiciendis, libero saepe dicta
            quisquam, impedit ad nostrum assumenda eligendi mollitia dolores
            sunt obcaecati, aut maxime.{" "}
          </p>
          <div className="icons">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-center col-md-4 col-sm-6">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span> 123 Market Street </span> Sydney, Australia
            </p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p> (+61) 02 000 000 00</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="#"> Support@ga.com</a>
            </p>
          </div>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
          <h2>
            <span>
              {" "}
              <button
                onClick={() => props.onSubscribe(true)}
                className="footer-button"
              >
                Subscribe to our Newsletter!
              </button>
              {/* <a
                href="#"
                onClick={() => props.onDashboard(true)}
                className="footer-link"
              >
                Dashboard
              </a> */}
            </span>
          </h2>
          <p className="menu">
            <a href="#"> Home</a> |<a href="#"> About</a> |
            <a href="#"> Services</a> |<a href="#"> Portfolio</a> |
            <a href="#"> News</a> |<a href="#"> Contact</a>
          </p>
          <p className="name"> Company Name &copy; 2022</p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
