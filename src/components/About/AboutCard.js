import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dipesh Sapkota </span>
            from <span className="purple"> Bangalore, India.</span>
            I am currently employed as a Full stack software developer at
            Mobiotics.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games(Football,batminton and tabletenis)
            </li>
            <li className="about-activity">
              <ImPointRight /> Dance 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that makes business and People Move forward!"{" "}
          </p>
          <footer className="blockquote-footer">Dipesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
