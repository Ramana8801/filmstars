import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import "../Mainbody.css";
import { Link } from "react-router-dom";
import "../Products.css";

class Comedians extends React.Component {
  render() {
    return (
         
      <div className="Mainbody" id="Mainid">
         <Card className="Card"> <h1 align="center"> Comedians</h1></Card>
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
              <Link to="/brahmanandam">
                <Card.Body>
                  <Card.Title> Brahmanandam</Card.Title>
                </Card.Body>
                <Card.Img
                  
                  src="https://www.filmykeeday.com/wp-content/uploads/2018/04/Brahmanandam-best-telugu-comedian-south-Indian-actor.jpg"
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
              <Link to="/chidambaram">
                <Card.Body>
                  <Card.Title> Chidambaram</Card.Title>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src="https://s3.ap-southeast-1.amazonaws.com/cdn.deccanchronicle.com/sites/default/files/coverr.jpg"
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
              <Link to="/narayan">
                <Card.Body>
                  <Card.Title>MS Narayan</Card.Title>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src="http://i.ndtvimg.com/mt/movies/2012-10/gajadonga-big.jpg"
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
              <Link to="/venu">
                <Card.Body>
                  <Card.Title>Venu madhav</Card.Title>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src="https://cdn.siasat.com/wp-content/uploads/2019/09/venu-madhav-1.jpg"
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
              <Link to="/lakshman">
                <Card.Body>
                  <Card.Title>lakshman rao </Card.Title>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src="http://data1.ibtimes.co.in/cache-img-0-450/en/full/587923/imgkondavalasa-lakshmana-rao.jpg"
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
              <Link to="/prudhviraj">
                <Card.Body>
                  <Card.Title>Prudhvi Raj</Card.Title>
                </Card.Body>
                <Card.Img
                 
                  src="https://i0.wp.com/bestoftheyear.in/wp-content/uploads/2018/05/Prudhvi-Raj.png?resize=535%2C354&ssl=1"
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
export default Comedians;
