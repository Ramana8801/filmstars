import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import "../Mainbody.css";
import { Link } from "react-router-dom";
import "../Products.css";

class Heroines extends React.Component {
  render() {
    return (
         
      <div className="Mainbody" id="Mainid">
         <Card className="Card"> <h1 align="center"> Heroines</h1></Card>
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
              <Link to="/samantha">
                <Card.Body>
                  <Card.Title> SAMANTHA</Card.Title>
                </Card.Body>
                <Card.Img
                  
                  src="http://www.topcount.co/wp-content/uploads/2015/10/Samantha-2015.jpg"
                  width="280"
                  height="260"
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
              <Link to="/kajal">
                <Card.Body>
                  <Card.Title> KAJAL</Card.Title>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src="https://2.bp.blogspot.com/-_iXOKVqReq8/WyX-sz29hoI/AAAAAAAAO9A/CKQIe_01zWwXUetj3PY7c4Pk3HjVRObegCLcBGAs/s1600/telugu-heroines-hot-photos-in-saree-25.jpg"
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
              <Link to="/tamanna">
                <Card.Body>
                  <Card.Title>TAMANNA</Card.Title>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src="https://www.chitramala.in/wp-content/uploads/2014/09/Tamanna.jpg"
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
              <Link to="/anupama">
                <Card.Body>
                  <Card.Title> ANUPAMA</Card.Title>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src="https://wallpaperaccess.com/full/1620317.jpg"
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
              <Link to="/rakul">
                <Card.Body>
                  <Card.Title>RAKUL </Card.Title>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src="https://www.pinkleave.com/wp-content/uploads/2018/04/rakul-preet-singh-best-south-actress.jpg"
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
              <Link to="/rasikana">
                <Card.Body>
                  <Card.Title>RASIKANA</Card.Title>
                </Card.Body>
                <Card.Img
                 
                  src="https://3.bp.blogspot.com/-YkOy6YmUNOw/V4kseJ3eYsI/AAAAAAAADEg/_cHRbmd1AYw9MPVF_ON9lMSiUN4R55XkwCLcB/s1600/Rashi-Khanna-Beautiful-Close-Up-Smiling-Face-HD-Photos-5.jpg"
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
export default Heroines;
