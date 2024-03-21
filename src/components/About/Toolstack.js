import React from "react";
import { BsFiletypeJava } from "react-icons/bs";
import { BsFiletypeHtml } from "react-icons/bs";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <BsFiletypeJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <BsFiletypeHtml />
      </Col>

    </Row>
  );
}

export default Toolstack;
