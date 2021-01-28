import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./skills.css";
import CardItem from "./CardItem";

const Skills = () => {
  return (
    <div className="pt-3 pb-3" id="skills">
      <h1 className=" text-center font-details ">Tech Skills</h1>
      <CardDeck>
        <Row className="d-flex justify-content-around">
          <Col md={4}>
            <CardItem title="Frontend" name="frontend" />
          </Col>
          <Col md={4}>
            <CardItem title="Backend" name="backend" />
            <CardItem
              title="Programming Languages"
              name="programmingLanguages"
            />
          </Col>
          <Col md={4}>
            <CardItem title="Other Tools" name="others" />
          </Col>
        </Row>
      </CardDeck>
    </div>
  );
};

export default Skills;
