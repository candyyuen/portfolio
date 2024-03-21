import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import projectBtn from "./projectBtn";
import Particle from "../Particle";
import URA1 from "../../Assets/URA2.png";
import unicorn1 from "../../Assets/animation1.png";
import unicorn2 from "../../Assets/animation2.png";
import video1 from "../../Assets/video1.png";
import video2 from "../../Assets/jollymap1.png";
import video3 from "../../Assets/video5.png";
import video4 from "../../Assets/video2.png";
import video5 from "../../Assets/video4.png";
import reels from "../../Assets/reels.png";
import animation3D from "../../Assets/3D.png";
import motiongraphic from "../../Assets/mg1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: " rgb(64, 64, 64)" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card filter-project">
            <ProjectCard
              imgPath={URA1}
              isBlog={false}
              title="2D Animation | @Urban Renewal Authority"
              description="It is a 2D animation done for Urban Renewal Authority (市區重建局) 2023's new year campaign. For the best watching experience, the animation should be view in mobile."
              demoLink="https://ecard.ura.org.hk/html/2023cny/"
            />
          </Col>

          <Col md={4} className="project-card filter-app">
            <ProjectCard
              imgPath={unicorn1}
              isBlog={false}
              title="2D Animation | Personal Work"
              description="This is an original character created by me. This is a re-created version. The orginal animation was created in 2018.  "
              demoLink="https://youtu.be/csHMgu2rVVM?si=WLhPsttzol3EFep_"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={video1}
              isBlog={false}
              title="Video Edit | @ViDeInsightAsia"
              description="Showcase and showreel editing for ViDeInsightAsia. Edited over 40 showcase videos for client reference. For more video reference please check out their offical website. "
              demoLink="https://youtube.com/playlist?list=PLhaILNq6AAY4VrQcByWaDbJm3bgZ3a7w7&si=zJZ0cqaVBZIPlQsa/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={video2}
              isBlog={false}
              title="Video Edit | @Jollymap"
              description="Youtube videos edited for Jollymap. I am responsible for directing, video editing, shooting and thumbnail design.
              One of my directed video is the second most viewed video in the channel. "
              demoLink="https://youtube.com/playlist?list=PLhaILNq6AAY4EHOr8R2qkZi1CmD-8FSaP&si=vbQTWtvjz8-A1rQj"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={video3}
              isBlog={false}
              title="Video Edit | Group Project"
              description="It's a documentary project. The documentary is about a driver volunteered to help carcass to settle their after life. I am responsible for video editing, effects and script writing."
              demoLink="https://www.youtube.com/watch?v=Q4EIZ7-to2U" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={video4}
              isBlog={false}
              title="Video Edit | Individual Project"
              description="A newcast story about a Hong Kong calligrapher who is excel in chinese calligraphy.
              My role for this project is Voice Over, Editor, Video editor and Camera."
              demoLink="https://www.youtube.com/watch?v=rmbnn8gxw68"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={video5}
              isBlog={false}
              title="Video Edit | Group Project@SPCA"
              description="This is a group project done in my year 2 study. 
              The interview has divided into six parts focusing on different topics. 
              These interview videos were produced to raise the public's awareness of animal protection on behalf of SPCA.
              And I am responsible for production, video editing and effects"
              demoLink="https://youtube.com/playlist?list=PLhaILNq6AAY76o3GOwNNShQk3jY9u1aU3"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unicorn2}
              isBlog={false}
              title="2D Animation | Personal Work"
              description="This is the first animation I produced during my secondary school study.
              It is kind of a lyrics MV with my character as the theme. The words in the animation were all written by myself."
              demoLink="https://www.youtube.com/watch?v=X5N1cCBeapA"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reels}
              isBlog={false}
              title="Reels | Personal Work"
              description="The following playlist included two of the reels I created in recent years."
              demoLink="https://youtube.com/playlist?list=PLhaILNq6AAY4g5wqOoaFULf-r1WX29KpO&si=k9OyX2JNAYvlJAhM"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={motiongraphic}
              isBlog={false}
              title="Lower Third | Personal Work"
              description="These are same lower third samples I have created/ try out for the videos."
              demoLink="https://www.youtube.com/watch?v=ltNRMLB3TIg"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={animation3D}
              isBlog={false}
              title="3D Animation | Individual Project"
              description="This is the first 3D animation I made for my school assignment. 
              The story is about a sphere (a character) that got trapped in a room, and it needs to find its way to help itself get out of the room. 
              Inside the room, there are a bunch of random stuff surrounding it. Like knife, spoon, stuffed toy, chair, tape so on."
              demoLink="https://youtu.be/J_V26cghumo"  
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
