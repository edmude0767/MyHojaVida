
/* eslint-disable no-undef */
//import logo from './logo.svg';
import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Switch,  Route, Link} from "react-router-dom";
import EstudiosR from "./component/EstudiosR";
import EditStudent from "./component/edit-student.component";
import ExperienciaL from "./component/ExperienciaL";
import Antecedentes from "./component/Antecedentes";
import MiPresentacion from "./component/MiPresentacion";
import Familia from "./component/Familia";
import ProjPowerBI1 from "./component/projpowerbi1.component";
import Excel from "./component/Excel";
import Proyecto1 from "./component/Proyecto1";
import Proyecto2 from "./component/Proyecto2";
import Proyecto3 from "./component/Proyecto3";
import Proyecto4 from "./component/Proyecto4";
import Home from "./component/Home";

function App() {
  
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="primary" variant="dark">
          <Container>
            <Nav>
            <Nav className = "justify-content-end" >
                          
                  <Link to = {"/Home.js"} className = "nav-link" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/></svg>Logros
                  </Link>
                </Nav>
            </Nav>
                      
            <Navbar.Brand>
                <Link to={"./MiPresentacion.js"}    className="nav-link" >
                  <h2>Mi presentacion</h2></Link>
            </Navbar.Brand>

              <Navbar.Brand>
                <Link to={"./EstudiosR.js"}className="nav-link" >
                  <h2>Estudios</h2></Link>
              </Navbar.Brand>

              <Navbar.Brand>
                <Link to={"./ExperienciaL.js"}    className="nav-link" >
                  <h2>Experiencia</h2></Link>
              </Navbar.Brand>

              <Navbar.Brand>
                <Link to={"./Antecedentes.js"}    className="nav-link" >
                  <h2>Antecedentes</h2></Link>
              </Navbar.Brand>

              <Navbar.Brand>
                <Link to={"./Familia.js"}    className="nav-link" >
                  <h2>Familia</h2></Link>
              </Navbar.Brand>
              <Nav>  
                  <Link to={"/create-student"}  className="nav-link" >
                  </Link>
              </Nav>

              <Nav>
                  <Link to = {"#!"} className = "nav-link" >
                  </Link>
              </Nav>
              
            </Container>
          </Navbar>
          

        </header> 
            <Container>
              <Row>
                <Col md={12}>
                    <div className="wrapper">
                      <Switch>                        
                          <Route
                            exact
                            path="/"
                            component={(props) =><MiPresentacion{...props} />}
                          />

                          <Route
                            exact
                            path="/EstudiosR.js"
                            component={(props) =><EstudiosR{...props} />}
                          />

                          <Route
                            exact
                            path="/edit-student"
                            component={(props) =><EditStudent{...props} />}
                          />

                          <Route
                            exact
                            path="/MiPresentacion.js"
                            component={(props) =><MiPresentacion{...props} />}
                          />

                          <Route
                            exact
                            path="/ExperienciaL.js"
                            component={(props) =><ExperienciaL{...props} />}
                          />
                          
                          <Route
                            exact
                            path="/Antecedentes.js"
                            component={(props) =><Antecedentes{...props} />}
                          />

                          <Route
                            exact
                            path="/Familia.js"
                            component={(props) =><Familia{...props} />}
                          />
                          <Route
                            exact
                            path="/projpowerbi1.component.js"
                            component={(props) =><ProjPowerBI1{...props} />}
                          />

                          <Route
                            exact
                            path="/Excel.js"
                            component={(props) =><Excel{...props} />}
                          />

                          <Route
                            exact
                            path="/Proyecto1.js"
                            component={(props) =><Proyecto1{...props} />}
                          />

                          <Route
                            exact
                            path="/Proyecto2.js"
                            component={(props) =><Proyecto2{...props} />}
                          />
                          <Route
                            exact
                            path="/Proyecto3.js"
                            component={(props) =><Proyecto3{...props} />}
                          />

                          <Route
                            exact
                            path="/Proyecto4.js"
                            component={(props) =><Proyecto4{...props} />}
                          />

                          <Route
                            exact
                            path="/Home.js"
                            component={(props) =><Home{...props} />}
                          />
                      </Switch> 
                    </div>
                </Col>
              </Row>
            </Container> 
      </Router> 
    </div>
  );
}
export default App;