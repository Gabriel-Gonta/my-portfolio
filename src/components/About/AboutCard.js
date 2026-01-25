import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", lineHeight: "1.8" }}>
            Hello, I'm <span className="purple">Gabriel Gonta</span>, a passionate <span className="purple">Fullstack Developer</span> and <span className="purple">Cybersecurity</span> enthusiast from <span className="purple">Nice, France</span>.
            <br />
            <br />
            I'm currently pursuing a degree in <b>Cybersecurity</b> at <b>CyberUniversity</b>, where I continuously deepen my expertise in system security, network protection, ethical hacking, and secure application development. This academic journey complements my hands-on experience in building secure, scalable web applications.
            <br />
            <br />
            As an entrepreneur, I'm the founder and CEO of two innovative ventures:
            <br />
            <br />
            <strong style={{ color: "#c770f0" }}>• <a className="purple" target="_blank" rel="noreferrer" href="https://skaneat.com" style={{ textDecoration: "none" }}>SkanEat</a></strong> - A comprehensive web application designed to modernize and enhance the customer experience in restaurants, bars, and cafés, streamlining operations and improving service quality.
            <br />
            <br />
            <strong style={{ color: "#c770f0" }}>• <a className="purple" target="_blank" rel="noreferrer" href="https://skaldas.com" style={{ textDecoration: "none" }}>Skaldas</a></strong> - An innovative platform delivering cutting-edge solutions and services in the digital space.
            <br />
            <br />
            My technical expertise spans across modern web technologies, with a strong focus on building fullstack applications using React, Node.js, Vue.js, and various backend frameworks. I specialize in creating real-time applications, RESTful APIs, and secure authentication systems. I'm also passionate about developing Discord bots and integrating complex systems.
            <br />
            <br />
            Outside of development, I have a deep passion for creative and immersive activities that keep me inspired and balanced:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Ride my motorbike in the mountains or on the track
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing music – guitar & drums
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming and game design exploration
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music and discovering new artists
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and exploring new cultures
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
