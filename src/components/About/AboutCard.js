import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineSmile } from "react-icons/ai";
import { MdOutlineBakeryDining } from "react-icons/md";
import { IoCamera } from "react-icons/io5";
import { FaPlaneDeparture } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="yellow">Candy<AiOutlineSmile /> </span>
            <br />
            <br />
            I am a recent graduate from City University of Hong Kong with a degree in Media and Communication.
            <br />
            <br />
            In my free time, I enjoy
          </p>
          
            <li className="about-activity">
            <MdOutlineBakeryDining /> Baking &nbsp;
            <IoCamera /> Photography
            </li>
            <li className="about-activity">
            <AiOutlineHeart /> Craft &nbsp;&nbsp;&nbsp;&nbsp;
            <FaPlaneDeparture />Travelling
            </li>
      
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
