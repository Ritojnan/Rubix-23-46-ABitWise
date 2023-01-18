import React, { useRef, useState } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";
import "./custom.scss";
import Chatbox from "./components/Chatbot.jsx";
import Navbar from "./components/Navbar";

// import Modal from "react-bootstrap/Modal";

// import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
// import Map from  './components/Map'
// import { MapContainer, TileLayer, useMap,Map,Marker,Popup } from 'react-leaflet'
// import React from "react";
// import { Map, Marker, Popup, TileLayer } from "react-leaflet";
// import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css';
function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Navbar></Navbar>
      <Chatbox></Chatbox>
      <Button className="chatbot-button" size="lg" variant="primary" onClick={handleShow}>
        <b>SOS Chatbot</b>
      </Button>
      {/* <Map></Map> */}


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>



      {/* <Map
   center={position}
   zoom={1}
   style={{ height: '100vh', width: '100wh' }}
   >
   <TileLayer/>
</Map> */}

      {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer> */}
    </>
  );
}

export default App;
