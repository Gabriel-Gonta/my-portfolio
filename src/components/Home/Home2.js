import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              I'm a passionate <span className="purple">Fullstack Developer</span> with a strong interest in <span className="purple">mobile & web technologies</span> and <span className="purple">cybersecurity</span>. I love building modern, secure, and user-friendly applications that solve real-world problems.
              <br />
              <br />
              I’m fluent in technologies such as <span className="purple">HTML/CSS</span>, <span className="purple">JavaScript</span>, <span className="purple">React</span>, <span className="purple">Node.js</span>, and <span className="purple">SQL</span>.
              <br />
              <br />
              I also enjoy coding in systems and scripting languages like <span className="purple">C</span>, <span className="purple">Python</span>, <span className="purple">Go</span>, <span className="purple">Swift</span>, and <span className="purple">Dataquery</span>.
              <br />
              <br />
              My main focus is on constantly learning new tools and languages, while improving my <span className="purple">cybersecurity</span> skills and staying up to date with tech industry standards.
              <br />
              <br />
              Whenever possible, I dedicate my time to building new projects and MVPs using modern web frameworks like <span className="purple">React.js</span>, <span className="purple">Vue.js</span>, and <span className="purple">Angular</span>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
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
                  href="https://github.com/gabrielgonta"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gabriel-gonta-"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/gab._riel.g/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
