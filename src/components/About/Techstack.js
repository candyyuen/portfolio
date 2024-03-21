import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobelightroom } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={3} md={2} className="tech-icons">
      <SiAdobepremierepro />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
      <SiAdobeaftereffects />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
      <SiAdobephotoshop />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
      <SiAdobeillustrator />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
      <SiAdobelightroom />
      </Col>
      
    </Row>
  );
}

export default Techstack;
