import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import "./Mainbody.css";
import { Link } from "react-router-dom";
import "./Products.css";
import Heroines from "./Heroines/heroines";
import Comedians from "./comedians/comedians";
import Villains from "./villains/Villains";

import { Route } from 'react-router-dom';
import Button from "@restart/ui/esm/Button";
import Heross from "./Heros/heross";
import Login from "./login";

class Mainbody extends React.Component {
  render() {
    return (
         <div>
            <Heross/>
           <Heroines/>
           <Comedians/>
           <Villains/>
           </div>
           
          
    );
  }
}
export default Mainbody;
