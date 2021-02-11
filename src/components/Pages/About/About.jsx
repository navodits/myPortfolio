import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Profile from "../../../assets/img/profile/profile.png";
import "./about.css";

const About = () => {
  return (
    <div id="about">
      <div className="about pt-4 pb-4">
        <h1 className="pt-1 text-center font-details pb-3">About Me</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2">
                <Image
                  className="profile justify-content-end"
                  alt="Profile"
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col className="my-details rounded" xs={12} md={6}>
              <Row className="align-items-start p-2  ">
                Hi there, I am <strong>&nbsp;Navdeep Singh Sokhal</strong>
                <br />I am passionate about many things in life and one of those
                things is programming. I Graduated from Simon Fraser University
                in the fall of the unprecedented year 2020, with a Bachelor of
                Science degree specialized in Software Systems. I am a Full
                Stack Software Developer with React.js, React Native,
                Express.js, Node.js, Django and MongoDB as my tech stack. Being
                a recent graduate, my goal is to build my career in the field of
                software development, learn as many skills and gain as much
                knowledge as I can. I am passionate and dedicated to grow in my
                career as well as in my life.
                <br /> <br />
                Apart from my studies and personal projects, I have been working
                in the restaurant industry for more than 5 years and learned
                many skills that will aid me in achieving my goal.
                <br />I am an outdoorsy adventurous person who likes to get
                along with people. Moreover, I enjoy giving my 100 percent
                whether it is a fun activity or a challenging task at work.
              </Row>
              <Row>
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1KWdS5xQ1jLPTBnt-CpYV9otZAgXL6ogA/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/navodits"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/navdeep-sokhal-2a7379133/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
              <Row></Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
