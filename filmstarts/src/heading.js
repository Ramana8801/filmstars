import React, { Component } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Route } from "react-router-dom";

import Login from "./login";
import { findByLabelText } from "@testing-library/dom";
import Logout from "./logout";
import Heroines from "./Heroines/heroines";
import Mainbody from "./Mainbody";
import "./Products.css";

class Header extends React.Component {
  render() {
    return (
      <div className="Row1">
        <Navbar bg="SlateBlue" variant="white" class="navbar">
          

          <Navbar.Brand href="#" color="white">
            
            <div>
           
              <Link to="/"> Home</Link>
              
            </div>
          
          </Navbar.Brand>
          
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            
          </Navbar.Collapse>
          <Navbar.Collapse>
            <Nav>
              <h4 className="colors">Telugu films stars</h4>
            </Nav>
            
          </Navbar.Collapse>
          <Nav>
         
            <Nav.Link>
              {""}
              
              {""}
            </Nav.Link>
            
            <Navbar.Brand href="#" color="white">
              {" "}
             
            </Navbar.Brand>
            <Nav.Link>
            <div>
                <Link to="/login">Logout</Link>
                <Route exact path="/logout">
                  <Logout />
                </Route>
              </div>
            </Nav.Link>

            
            <NavDropdown title="Language" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#Eng">Eng</NavDropdown.Item>
              <NavDropdown.Item href="#Telugu">Telugu</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Hindi">Hindi</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Header;
