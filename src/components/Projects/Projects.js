import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import flight from "../../Assets/Projects/flight.png";
import password from "../../Assets/Projects/password.png";
import emailspoofing from "../../Assets/Projects/emailspoofing.png";
import keylogger from "../../Assets/Projects/keylogger.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import gabiBook from "../../Assets/Projects/gabibook.png";
import spotify from "../../Assets/Projects/spotify.png";
import dashboard from "../../Assets/Projects/dashboard.png";
import videomatch from "../../Assets/Projects/video-match.png"
import gaBank from "../../Assets/Projects/gabank.png";
import myHotelBooker from "../../Assets/Projects/myhotelbooker.png";
import myRPG from "../../Assets/Projects/myrpg.png";
import myRadar from "../../Assets/Projects/myradar.png";
import hashinCPP from "../../Assets/Projects/hashingcpp.png";
import tagpaw from "../../Assets/Projects/tagpaw.png";
import discordBotAdvanced from "../../Assets/Projects/discord-bot-advanced.png";
import discordBotCommunity from "../../Assets/Projects/discord-bot-community.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tagpaw}
              isBlog={false}
              title="TagPaw - Fullstack Pet Management"
              description="A comprehensive fullstack web application for managing pets and animals. Features include user authentication, pet profiles, medical records, appointment scheduling, and a complete admin dashboard. Built with modern technologies for scalability and performance."
              ghLink="https://github.com/Gabriel-Gonta/tagpaw"
              demoLink="https://tagpaw.fr"
              demoLink2="https://app.tagpaw.fr/login"
              hours="450"
              technologies={["React",
                "Node.js",
                "Typescript",
                "Tailwindcss",
                "API",
                "MySQL"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discordBotAdvanced}
              isBlog={false}
              title="Advanced Discord Bot - Fullstack"
              description="A feature-rich Discord bot with web dashboard, user management, custom commands, moderation tools, music player, and real-time notifications. Includes a full admin panel for server configuration and analytics."
              ghLink="https://github.com/Gabriel-Gonta"
              hours="380"
              technologies={["Node.js",
                "Discord",
                "React",
                "Typescript",
                "API",
                "Socket"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discordBotCommunity}
              isBlog={false}
              title="Discord Community Bot - Fullstack"
              description="A comprehensive Discord bot solution for community management with automated moderation, role management, welcome systems, leveling, economy, and integrated web dashboard for server owners."
              ghLink="https://github.com/Gabriel-Gonta"
              hours="320"
              technologies={["Node.js",
                "Discord",
                "React",
                "Python",
                "API",
                "MySQL"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Full Admin Dashboard - Frontend"
              description="This is a production-ready, fully responsive admin dashboard built using React, Tailwind CSS, Typescript and Shadcn UI"
              ghLink="https://github.com/gabrielgonta/Full-Admin-Dashboard.git"
              hours="330"
              technologies={["Typescript",
                "React",
                "Tailwindcss"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={videomatch}
              isBlog={false}
              title="Video Match - Fullstack"
              description="This is a fullstack real-time video chat application inspired by Omegle, built using React, WebRTC, Socket.IO, and Node.js"
              ghLink="https://github.com/gabrielgonta/Full-Admin-Dashboard.git"
              hours="290"
              technologies={["Typescript",
                "React",
                "Tailwindcss",
                "Node.js",
                "Vite",
                "Socket"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify - Frontend"
              description="This project is a modern, responsive design inspired by Spotify’s interface built with Vue.js, Vite, and Tailwind CSS"
              ghLink="https://github.com/gabrielgonta/spotify-frontend.git"
              hours="170"
              technologies={["Vue.js",
                "Vite",
                "Tailwindcss"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gabiBook}
              isBlog={false}
              title="GabiBook - Frontend"
              description="This project is a sleek and modern Flight Booking UI template built with React and Tailwind CSS"
              ghLink="https://github.com/gabrielgonta/Gabibook"
              hours="240"
              technologies={["React",
                "Node.js",
                "Tailwindcss", 
                "HTML"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gaBank}
              isBlog={false}
              title="GaBank - Frontend"
              description="This project is a modern and intuitive banking application UI template built with React and Tailwind CSS"
              ghLink="https://github.com/gabrielgonta/GaBank"
              hours="110"
              technologies={["React",
                "Node.js",
                "Tailwindcss", 
                "HTML"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myHotelBooker}
              isBlog={false}
              title="HotelBooker - Fullstack"
              description="This project is a production-ready hotel booking platform built with modern web technologies and for backend API integration."
              ghLink="https://github.com/gabrielgonta/MyHotelBooker"
              hours="290"
              technologies={["React",
                "Node.js",
                "Tailwindcss",
                "HTML",
                "Cypress",
                "API"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myRPG}
              isBlog={false}
              title="My-RPG - Software"
              description="This project is a fully customized role-playing game designed from the ground up, using only a limited set of allowed functions."
              ghLink="https://github.com/gabrielgonta/my-rpg"
              hours="330"
              technologies={["C"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myRadar}
              isBlog={false}
              title="My-Radar - Software"
              description="This project is an air traffic simulation where planes travel between control towers, avoiding collisions."
              ghLink="https://github.com/gabrielgonta/my-radar"
              hours="180"
              technologies={["C"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hashinCPP}
              isBlog={false}
              title="Hashing-CPP - Software"
              description="This library provides efficient, fast, and portable hashing algorithms, including CRC32, MD5, SHA1, SHA256 (SHA2), and Keccak."
              ghLink="https://github.com/gabrielgonta/Hashing-CPP"
              hours="110"
              technologies={["Cplusplus"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="BurgerQuizGame - Fullstack"
              description="This project is an adaptation of the famous French TV game show Burger Quiz, developed with the React library."
              ghLink="https://github.com/gabrielgonta/BurgerQuizGame"
              hours="200"
              technologies={["React",
                "Node.js",
                "CSS", 
                "HTML", 
                "Docker"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MoneyManagerIOS - Software"
              description="This project is a captivating app allows you to track your revenues and expenses with a clean and visually appealing interface."
              ghLink="https://github.com/gabrielgonta/MoneyManagerIOS"
              hours="80"
              technologies={["Swift"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ToDoList - Fullstack"
              description="This project is a task management application, developed using React allowing you to efficiently manage your daily tasks."
              ghLink="https://github.com/gabrielgonta/ToDoList"
              hours="150"
              technologies={["React",
                "Node.js",
                "Firebase",
                "HTML",
                "CSS",
                "API"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Progressive Weather App - Frontend"
              description="This project is a modern app, sleek weather forecast application built with Vue.js and designed to work seamlessly across devices."
              ghLink="https://github.com/gabrielgonta/WeatherApp.git"
              hours="110"
              technologies={["Vue.js", "Node.js", "HTML", "CSS"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Books Online Market Analysis - Software"
              description="This project is a price-tracking tool designed to help analyze the book market by scraping data from the Books to Scrape website."
              ghLink="https://github.com/gabrielgonta/AnalystBooks"
              hours="70"
              technologies={["Python", "Shell"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flight}
              isBlog={false}
              title="Online Flight Ticket Booking - Fullstack"
              description="This project is a web-based platform allows users to easily search for flights, book tickets, and make secure payments online."
              ghLink="https://github.com/gabrielgonta/OnlineFlightTicketBooking"
              hours="200"
              technologies={["PHP", "HTML", "CSS", "Node.js", "MySQL"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={password}
              isBlog={false}
              title="Cybersecurity Tools - Software"
              description="This project contains four essential tools for cybersecurity enthusiasts and professionals:"
              ghLink="https://github.com/gabrielgonta/Cybersecurity-Tools.git"
              hours="250"
              technologies={["Python", "Kali"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keylogger}
              isBlog={false}
              title="Keylogger - Software"
              description="This project is Inputs To Mail is a security testing tool designed to capture keyboard, mouse, screenshot, and microphone inputs, then send this data securely to your email."
              ghLink="https://github.com/gabrielgonta/Keylogger.git"
              hours="120"
              technologies={["Kali", "Python"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emailspoofing}
              isBlog={false}
              title="Email Spoofing Toolkit - Software"
              description="This application is a React-based project designed for educational purposes, enabling users to explore concepts of email spoofing."
              ghLink="https://github.com/gabrielgonta/Email-Spoofing.git"
              hours="170"
              technologies={["Kali", "Python"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
