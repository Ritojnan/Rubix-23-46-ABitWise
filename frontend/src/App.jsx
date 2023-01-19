import React, { useRef, useState } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";
import "./custom.scss";
import Chatbot from "./components/Chatbot.jsx";
import Navbar from "./components/Navbar";
import { Modal, Button } from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
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
// import Modal from "react-bootstrap/Modal";



function App() {
  // const [count, setCount] = useState(0); 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
<>
<Navbar></Navbar>
<Button variant="primary" className="chatbot-button" onClick={handleShow} size="lg" >
SOS CHATBOT
</Button>

<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Modal Title</Modal.Title>
  </Modal.Header>
  <Modal.Body>

    <Chatbot></Chatbot>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary">Save Changes</Button>
  </Modal.Footer>
</Modal>
</>

  );
}

export default App;
