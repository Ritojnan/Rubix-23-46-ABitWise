import React, { useRef, useState } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";
import "./custom.scss";
import { Modal, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Map from  './components/Map'
// import { MapContainer, TileLayer, useMap,Map,Marker,Popup } from 'react-leaflet'
// import { Map, Marker, Popup, TileLayer } from "react-leaflet";
// import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
// import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import { motion } from "framer-motion";
import { Map, Marker } from "pigeon-maps"

//Custom Components
import Chatbot from "./components/Chatbot.jsx";
import Navbar from "./components/Navbar";

var longitude
var latitude
function App() {
  // const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
// function 
// (navigator.geolocation.watchPosition((position=>{
//   console.log(position.coords.longitude)
//   console.log(position.coords.latitude)
// longitude = position.coords.longitude
// latitude = position.coords.latitude
// })))
// console.log("this is "+longitude)
// console.log("this is "+latitude)
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
    const url =
      "https://docs.google.com/forms/d/e//formResponse";

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
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes> */}

      <Navbar></Navbar>
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
          <Modal.Title><h1>SOS Chatbot</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Chatbot></Chatbot>
        </Modal.Body>
        
      </Modal>

      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      </Routes> */}

        <div className="container">
          <div className="row featurette">
            <div className="col-md-7 ">
          
    


              {/* <a href="https://www.instagram.com/your-profile">
  <i className="bi-instagram"></i>

</a>
<a href="https://github.com/your-username">
<i className="bi-github"></i>
</a> */}

              {/* <h1>Working in progress</h1>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn btn-primary"
                onClick={() => null}
                >
                Launch
              </motion.button>
              <motion.div
                // animate={{ scale: [1, 1.2] }}
                // onScroll={(e) => {e.preventDefault();}}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit ex, perferendis amet, neque nulla dolorem ducimus
                laudantium quos perspiciatis consequatur ad! Consequatur dolorum
                inventore a fuga recusandae nemo neque. Ex.
              </motion.div>
            </div> */}
            <div className="px-5 mb-4 bg-light rounded-3" id="">

              <div className="container-fluid py-5">
                 <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <Marker width={50} anchor={[50.879, 4.6997]} />
      <Marker width={50} anchor={[51.879, 4.6997]} />
    </Map>
 
              </div>
            </div>
            <div className="col-md-5">
              <div className=" bg-custom-color">
                <i className="bi-alarm"></i>
                <motion.p onScroll={() => console.log("hi")}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  distinctio obcaecati exercitationem, fugit doloribus eveniet
                  reiciendis voluptate, impedit, officia fuga vitae. Hic
                  voluptatem ab nobis odit reiciendis quaerat, excepturi natus
                  dolorem aperiam reprehenderit quo ipsum esse. Accusantium
                  optio dolore sapiente autem rem facilis dolorem odit ratione,
                  expedita tempore magnam eveniet ex, repellat eos quam corrupti
                  fugiat distinctio beatae, esse obcaecati! Rerum, fugiat et. In
                  nemo placeat provident officiis, blanditiis facere maiores
                  veritatis eius sit perspiciatis magni facilis quia minima
                  adipisci necessitatibus! Aperiam aliquam hic nihil sequi
                  aliquid, beatae iste repellendus maxime impedit aut, odit
                  recusandae maiores distinctio? Ab corporis deserunt atque
                  vero, laboriosam consequatur aspernatur, vel, fuga cupiditate
                  iusto voluptates sapiente totam! Quisquam, laborum
                  reprehenderit, nostrum hic odio dicta at ipsam autem
                  aspernatur obcaecati nobis ut vel sunt facere repellendus ea
                  possimus doloribus enim? Enim, labore ipsa! Ab tempore hic
                  magnam est animi sit debitis, repellat nulla illum dolores vel
                  vitae corporis laudantium delectus iure aut? Quo dicta unde
                  aliquam facilis tempora reiciendis deleniti ullam eos vero ex
                  odio molestiae, illo magnam neque asperiores aspernatur
                  officia? Tempora culpa velit quae ea odit natus cupiditate
                  dolor vitae debitis, numquam maiores, aut dicta fuga sequi,
                  laboriosam laborum facilis modi nemo animi? Ut iusto optio
                  minus perspiciatis eum nihil, atque similique eos officia
                  accusantium incidunt totam, quam eveniet ad asperiores ea?
                  Itaque debitis cum, vitae ea dolore deleniti commodi magnam
                  alias soluta exercitationem! Quam amet, repellat placeat
                  consectetur sed, possimus minus quis soluta sequi laborum
                  numquam nulla totam ullam, unde quos error? Dolorem tenetur
                  vitae earum debitis, nam unde cumque nemo sequi reiciendis
                  mollitia ab a cum explicabo ducimus ipsum nobis officiis
                  tempore. Nulla necessitatibus, consectetur molestias facilis
                  eligendi quos impedit quas tenetur sed minima repellendus enim
                  reiciendis laudantium quidem soluta amet eveniet quis
                  doloribus ex totam harum numquam accusantium! Dolorem,
                  obcaecati ex?
                </motion.p>
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

                      <Form.Group className="mb-3" controlId="entry.839337160">
                        <Form.Label>Message for me</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Hi! We need an Awesome Web Developer like you...😆😆"
                          name="entry.839337160"
                          maxLength="100"
                        />
                      </Form.Group>

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
                  <h2>It's me hi! I am the solution it's me 🎵🎵🎵</h2>
                  <figure>
                    <img
                      src="../src/assets/profile-img/profileimg2.png"
                      className="img-fluid round-img py-5"
                      alt="image"
                      />
                    <figcaption>Caption for the image</figcaption>
                  </figure>

                  <p>
                    Swap the background-color utility and add a `.text-*` color
                    utility to mix up the jumbotron look. Then, mix and match
                    with additional component themes and more.
                  </p>
                  <button className="btn btn-outline-light" type="button">
                    Example button
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
      
                      </BrowserRouter>
    </>
  );
}

export default App;
