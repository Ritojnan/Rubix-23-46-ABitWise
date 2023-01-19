import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Navbar() {
  return (
    <>
     <div className="sticker">
        <div className="d-flex justify-content-center  p-2 bg-light">
          <h1 className="white-text"><b>resQuick</b></h1>
        </div>
        <div className="d-flex justify-content-evenly bg-primary text-white  ">
          <div>
            <a href="#worksection" className="text-white">
              <b>Volunteer</b>
            </a>
          </div>
          <div>
            <a href="#contactsection" className="text-white">
              <b>Donation</b>
            </a>
          </div>
          <div>
            <a href="#aboutsection" className="text-white">
              <b>Webinar</b>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
