import React, { useRef, useState } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";
import "./custom.scss";
import { Modal, Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MapCustom from "./components/MapCustom";
import Form from "react-bootstrap/Form";
import { motion } from "framer-motion";
import * as Icon from "react-bootstrap-icons";

//Custom Components
import Chatbot from "./components/Chatbot.jsx";
import Navbar from "./components/Navbar";
import UserDiff from "./components/UserDiff";
import About from "./components/About";
import NewsItem from "./components/NewsItem";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isSubmitted, setSubmitted] = useState(true);
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const input = document.getElementById("chonky");
    const inputValue = input.value;
    // console.log(inputValue == "");
    if (!inputValue == "") {
      return null;
    }
    setSubmitted(!isSubmitted);
    const formData = new FormData(formRef.current);
    const url = "https://docs.google.com/forms/d/e//formResponse";

    fetch(url, {
      method: "POST",
      body: formData,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Navbar></Navbar>
        <UserDiff></UserDiff>
        <Button
          variant="primary"
          className="chatbot-button btn btn-primary"
          // whileHover={{ move }}
          // whileTap={{ scale: 0.9 }}
          onClick={handleShow}
          size="lg"
        >
          <b> SOS CHATBOT</b>
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h1>SOS Chatbot</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Chatbot></Chatbot>
          </Modal.Body>
        </Modal>

        <div className="container">
          <div className="row featurette">
            <div className="col-md-7 ">
              <a href="https://www.instagram.com/your-profile">
                <i className="bi-instagram"></i>
              </a>
              <a href="https://github.com/your-username">
                <i className="bi-github"></i>
              </a>

              <div className="px-5 mb-4 bg-light rounded-3" id="">
                <div className="container-fluid py-5">
                  <MapCustom></MapCustom>
                </div>
              </div>
              <div className="col-md-5">
                <div className=" bg-custom-color">
                  <i className="bi-alarm"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main>
          <div className="container py-4">
            <header className="pb-3 mb-4 border-bottom">
              <a
                href="/"
                className="d-flex align-items-center text-dark text-decoration-none"
              >
                <span className="fs-4">Jumbotron example</span>
              </a>
            </header>

            <div className="px-5 mb-4 bg-light rounded-3" id="contactsection">
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Help some one in need</h1>
                {isSubmitted ? (
                  <>
                    <Form ref={formRef} onSubmit={handleSubmit} className="">
                      <Form.Group className="mb-3" controlId="entry.2005620554">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="John Doe"
                          name="entry.2005620554"
                          maxLength="30"
                          required
                        />
                      </Form.Group>
                      <Row>
                        <Col lg={6} md={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="entry.162308873"
                          >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="johndoe@xyz.com"
                              name="entry.162308873"
                              maxLength="50"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6} md={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="entry.1166974658"
                          >
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                              type="number"
                              placeholder="+xx followed by your number (max. 12)"
                              name="entry.1166974658"
                              maxLength="12"
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <input
                        type="text"
                        className="visually-hidden"
                        id="chonky"
                      />
                      <Button variant="btn btn-md text-bg-dark" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </>
                ) : (
                  <div className="container center">
                    <h1 className=" text-success">Submitted</h1>
                  </div>
                )}
              </div>
            </div>

            <div className="row align-items-md-stretch">
              <div className="col-md-6">
                <div className="h-100 p-5 text-bg-dark rounded-3 text-center">
                  <h2>Latest News</h2>
                  <NewsItem></NewsItem>
                  <NewsItem></NewsItem>
                  <NewsItem></NewsItem>
                  <button className="btn btn-outline-light" type="button">
                    See More{" "}
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="h-100 p-5 bg-light border rounded-3">
                  <h2>Add borders</h2>
                  <div>
                    <h2 id="section1">Section 1</h2>
                    <p>Content for section 1</p>
                    <h2 id="section2">Section 2</h2>
                    <p>Content for section 2</p>
                  </div>

                  <p>
                    Or, keep it light and add a border for some added definition
                    to the boundaries of your content. Be sure to look under the
                    hood at the source HTML here as we've adjusted the alignment
                    and sizing of both column's content for equal-height.
                  </p>
                  <button className="btn btn-outline-secondary" type="button">
                    Example button
                  </button>
                </div>
              </div>
            </div>

            <footer className="pt-3 mt-4 text-muted border-top">© 2022</footer>
          </div>
        </main>
        <About />
        <Routes>
          <Route path="/" component={<MapCustom />} />
          <Route path="/locate" component={<MapCustom />} />
          <Route path="/about" component={<About />} />
          <Route path="/helpme" component={<About />} />
          <Route path="/rescue" component={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
