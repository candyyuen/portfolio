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
            I’m a 
            <b className="purple">
            &nbsp;Content Specialist&nbsp; 
            </b>
            and 
            <b className="purple">
            &nbsp;Web Editor&nbsp; 
            </b>
            with experience across broadcasting, digital media, and content marketing.
              <br />
              <br />Currently working at Commercial Radio Hong Kong, I manage
              <i>
                <b className="purple"> 
                &nbsp;digital content&nbsp;  
                </b>
                &nbsp;for radio programmes, producing&nbsp;  
                <b className="purple"> 
                &nbsp;social media content, short-form videos,&nbsp;  
                </b>
                and
                <b className="purple"> 
                &nbsp;promotional campaigns&nbsp; 
                </b> 
              </i>
              that connect with audiences across multiple platforms.
              <br />
              <br />
              My background spans
              <i>
                <b className="purple"> content production, video editing, social media management, live-stream operations,&nbsp;  
                </b> 
                and agency-side
                <b className="purple">
                &nbsp;digital marketing.&nbsp;  
                </b>
             </i>
             From content ideation and scripting to production and distribution, I enjoy transforming creative concepts into engaging digital experiences. {" "}
                <i>
              <br />
              <br />
                Passionate about
                <b className="purple">
                &nbsp;storytelling&nbsp;
                </b>
                and
                <b className="purple">
                &nbsp;audience engagement
                </b>
                </i>
                , I continuously explore new formats and trends to create content that informs, entertains, and resonates.
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
