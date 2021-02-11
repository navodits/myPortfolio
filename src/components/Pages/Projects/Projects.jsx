import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import hungryWanderer from "../../../assets/img/projects/hungryWanderer.png";
import Card from "react-bootstrap/Card";
import thingyLife from "../../../assets/img/projects/thingyLife.png";
import "./projects.css";
const Projects = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">Projects</h1>
      <Timeline>
        <Events>
          {/*...First Project...*/}

          <ImageEvent
            date="November, 2020"
            className="text-center"
            text="Food sharing Mobile App"
            src={hungryWanderer}
            alt="Food Sharing App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Food Sharing App
                        created with React Native and Node JS that let you give
                        or take food/ingredients before it goes in the bin and
                        hence reduces food wastage.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Login and registration</li>
                          <li>Add, Edit and Delete ingrdients/food items </li>
                          <li>Stores images on the cloud</li>
                          <li>Validating user requests</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>React Native</li>
                          <li>NodeJS/Express</li>
                          <li>HTML/CSS</li>
                          <li>Bootstrap</li>
                          <li>MongoDB</li>
                          <li>AWS</li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/navodits/hungryWanderer/tree/master"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton href="https://youtu.be/poPEwzJ7tyE" target="_blank">
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>

        {/*...Second Project...*/}

        <ImageEvent
          date="December, 2020"
          className="text-center"
          text="Online Personal Diary"
          src={thingyLife}
          alt="Personal Diary Web App"
        >
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    PROJECT DETAILS
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong> This is a Web App created
                      with React and Django that let you Journal your daily
                      life, add photoghrapic memories and more functionality
                      coming soon.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles pt-1">
                        <li>Create Account and Login</li>
                        <li>Journal your daily posts</li>
                        <li>Upload Memories</li>
                      </ul>
                      <hr />
                      <strong>Tech used:</strong>
                      <ul>
                        <li>React</li>
                        <li>Django</li>
                        <li>HTML/CSS</li>
                        <li>React Router</li>
                        <li>MongoDB</li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                href="https://thingylife.herokuapp.com/"
                target="_blank"
              >
                SEE LIVE
              </UrlButton>
              <UrlButton
                href="https://github.com/navodits/ThingyLife/tree/master"
                target="_blank"
              >
                SOURCE CODE
              </UrlButton>
              <UrlButton
                href="https://www.linkedin.com/posts/anand-kumar-jha-745798a4_react-materialui-fun-activity-6716765686963826688-GIpZ"
                target="_blank"
              >
                WATCH VIDEO
              </UrlButton>
            </div>
          </div>
        </ImageEvent>
      </Timeline>
    </div>
  );
};

export default Projects;
