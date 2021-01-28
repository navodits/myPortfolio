import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { skills } from "./data";

const CardItem = ({ title, name }) => {
  return (
    <div>
      <Card className="focus mt-3 mb-3">
        <Card.Body>
          <Card.Title className="text-center  card-title">{title}</Card.Title>
          <hr />
          <Card.Text className="card-text d-flex justify-content-start flex-column">
            {skills[name].map((skill, index) => (
              <span className="p-2" key={index}>
                <a
                  className="text-dark text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={skill.imgSrc}
                    alt={skill.imgAltText}
                    rounded
                    className="image-style m-1"
                  ></Image>
                  {skill.skillName}
                </a>
              </span>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardItem;
