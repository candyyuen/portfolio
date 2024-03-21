import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Icon.png";
import Tilt from "react-parallax-tilt";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Particle from "../Particle";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am passionate about creative industries......🙈
              <br />
              <br />During my studying, I have gained valuable experience in various areas,
              <i>
                <b className="purple"> including animation, documentary production, video news, photography, and digital marketing. </b>
              </i>
              <br />
              <br />
              One of my strengths is to flexibly apply my
              <i>
                <b className="purple"> creative skills </b> 
             </i>
                across various projects and industries. I possess an {" "}
                <i>
                <b className="purple">
                open-minded&nbsp;
                </b>
                </i>
                nature that fosters the generation of innovative ideas. 
              <br />
             
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" width="250px" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yuentszching/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto: tszcyuen@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
