import { useRef, useState } from "react";
import reactLogo from './assets/react.svg'
import './App.css'
import Chatbox from './components/Chatbot.jsx'
import Navbar from "./components/Navbar";


// import "bootstrap/dist/css/bootstrap.css";
import "./custom.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { motion } from "framer-motion";
function App() {
  const [count, setCount] = useState(0)


  
  return (
      <>
      <Navbar></Navbar>
      <Chatbox></Chatbox>
     <Button className="chatbot-button" size="lg"><b>SOS Chatbot</b></Button>
     </>

    


    
    
    
    
     );
  
}

export default App
