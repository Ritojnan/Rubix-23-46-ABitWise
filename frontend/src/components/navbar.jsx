import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Navbar() {
  return (
    <>
       
      <header className="p-3 text-bg-dark">
        
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <div className="text-start "><b>resQuick</b></div>
            </a>
            

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Donation
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Webinar
                </a>
              </li>
              {/* <li>
                <a href="#" className="nav-link px-2 text-white">
                  Translate
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Flashlight
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Siren
                </a>
              </li> */}
            </ul>

            

            <div className="text-end">
              {/* <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
