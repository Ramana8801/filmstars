import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import "../Mainbody.css";
import { Link } from "react-router-dom";
import "../Products.css";

class Villains extends React.Component {
  render() {
    return (
         
      <div className="Mainbody" id="Mainid">
         <Card className="Card"> <h1 align="center"> Villains</h1></Card>
        <CardGroup>
        <Card
              style={{
                padding: "30px 30px 30px",
                border:'0px'
              }}>
          
            <Card
              style={{
                padding: "30px 30px 30px",
               
              }}>
              <Link to="/saikumar">
                <Card.Body>
                  <Card.Title> Sai Kumar</Card.Title>
                </Card.Body>
                <Card.Img
                  
                  src="http://www.teluguone.com/tmdbuserfiles/sai(21).jpg"
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
              <Link to="/jagapathi">
                <Card.Body>
                  <Card.Title> jagapathi babu</Card.Title>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src="https://qph.fs.quoracdn.net/main-qimg-b78292a72756e78efaf6741a36f27ab0-c"
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
              <Link to="/aravind">
                <Card.Body>
                  <Card.Title>Arvind Swamy</Card.Title>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-oi6t1mf42nt87fbeuethfdc7k5-20190425225726.Medi.jpeg"
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
              <Link to="/prakash">
                <Card.Body>
                  <Card.Title>Prakash Raj</Card.Title>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src="https://img.theweek.in/content/dam/week/news/entertainment/images/2019/1/14/Prakash-Raj-pic.jpg"
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
              <Link to="/pradeep">
                <Card.Body>
                  <Card.Title>pradeep rawat </Card.Title>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src="http://images.desimartini.com/media/main/gallery/81bfdd88-4106-48d9-a5a5-4aee429d1835.jpg"
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
              <Link to="/pinisetty">
                <Card.Body>
                  <Card.Title>Aadhi Pinisetty</Card.Title>
                </Card.Body>
                <Card.Img
                 
                  src="http://www.cinejosh.com/newsimg/newsmainimg/aadhi-role-an-inspiration-of-a-cm-son_b_2304160656.jpg"
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
export default Villains;
