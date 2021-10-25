import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import "../Mainbody.css";
import { Link } from "react-router-dom";
import "../Products.css";
import Heroines from "../Heroines/heroines";
import Comedians from "../comedians/comedians";
import Villains from "../villains/Villains";

class Heross extends React.Component {
  render() {
    return (
    
        
      <div>
         <Card className="Card"> <h1 align="center"> Heros</h1></Card>
        <CardGroup className="Group" >
        <Card 
              style={{
                padding: "30px 30px 30px",
                border:'0px'
              }}>
          
            <Card
              style={{
                padding: "30px 30px 30px",
               
              }}>
              <Link to="/mahesh">
                <Card.Body >
                  <Card.Title>MAHESH BABU</Card.Title>
                </Card.Body>
                <Card.Img 
                  
                  src="https://i2.wp.com/godofindia.com/wp-content/uploads/2017/05/mahesh-babu-10.jpg"
                  width="280"
                  height="280"
                />
               
              </Link>
             
            </Card></Card>
            
            
            
            <Card
              style={{
                padding: "30px 30px 30px",
                border:'0px'
              }}>
              <Card
              style={{
                padding: "30px 30px 30px",
              }}
            >
              <Link to="/pawan">
                <Card.Body>
                  <Card.Title>PAWAN KALYAN</Card.Title>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src="https://i1.wp.com/godofindia.com/wp-content/uploads/2017/05/pawan-kalyan-25.jpg"
                  width="280"
                  height="280"
                />
              </Link>
            </Card></Card>
           

            <Card
              style={{
                padding: "30px 30px 30px",
                border:'0px'
              }}>
            <Card
              style={{
                padding: "30px 30px 30px",
              }}
            >
              <Link to="/prabhas">
                <Card.Body>
                  <Card.Title>PRABHAS RAJU</Card.Title>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src="https://i2.wp.com/godofindia.com/wp-content/uploads/2017/05/prabhas-21.jpg"
                  width="280"
                  height="280"
                />
              </Link>
            </Card> </Card>
          </CardGroup>
          <CardGroup>
            <Card
              style={{
                padding: "30px 30px 30px",
                border:'0px'
              }}>
            <Card
              style={{
                padding: "30px 30px 30px",
              }}
            >
              <Link to="/ntr">
                <Card.Body>
                  <Card.Title>NTR</Card.Title>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src="https://tse2.mm.bing.net/th?id=OIP.gQ43JRQbX4LiT0qf1a8kpAHaE7&pid=Api&P=0&w=239&h=160"
                  width="280"
                  height="300"
                />
              </Link>
            </Card></Card>
            <Card
              style={{
                padding: "30px 30px 30px",
                border:'0px'
              }}>

            <Card
              style={{
                padding: "30px 30px 30px",
              }}
            >
              <Link to="/sr.ntr">
                <Card.Body>
                  <Card.Title>SR.NTR</Card.Title>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src="https://tse2.mm.bing.net/th?id=OIP.CyPqSbEMaX2JFporWBeVwgHaFJ&pid=Api&P=0&w=227&h=159"
                  width="280"
                  height="300"
                />
              </Link>
            </Card></Card>
            <Card
              style={{
                padding: "30px 30px 30px",
                border:'0px'
              }}>
            <Card
              style={{
                padding: "30px 30px 30px",
              }}
            >
              <Link to="/krishna">
                <Card.Body>
                  <Card.Title>KRISHNA</Card.Title>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src="https://tse1.mm.bing.net/th?id=OIP.4A5AVHxmVDPiBuJ9O-q62QHaFj&pid=Api&P=0&w=201&h=151"
                  width="280"
                  height="280"
                />
              </Link>
            </Card>
         
          </Card>
        </CardGroup>
        
      </div>
     
     
    );
  }
}
export default Heross;
