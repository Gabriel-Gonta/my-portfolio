import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import myHotelBooker from "../../Assets/Projects/myhotelbooker.png";
import myRPG from "../../Assets/Projects/myrpg.png";
import myRadar from "../../Assets/Projects/myradar.png";
import spotify from "../../Assets/Projects/spotify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently — client deliveries, my own ventures, and personal builds.
        </p>
        <h2 className="project-heading" style={{ fontSize: "1.6em", marginTop: "20px" }}>
          <strong className="purple">Client</strong> Projects
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"
              isBlog={false}
              title="B2B SaaS Platform - Management & Billing"
              description="Full SaaS platform for a client: multi-team management, subscriptions, recurring billing, analytics dashboard, REST API, SSO authentication and third-party integrations (payment, CRM). Deployed in production with hundreds of users."
              isClientProject={true}
              demoLink="https://chartmogul.com"
              hours="920"
              technologies={["React",
                "Node.js",
                "Typescript",
                "Tailwindcss",
                "API",
                "MySQL",
                "Docker"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600"
              isBlog={false}
              title="Proptech - Real Estate Platform"
              description="Full real estate application: property listings (sale/rent), advanced search with filters and map, appointment booking, owner and agency portals, CRM back-office for agents, notifications and lead-tracking dashboard."
              isClientProject={true}
              demoLink="https://www.flatfair.co.uk"
              hours="780"
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
              imgPath="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600"
              isBlog={false}
              title="Multi-Vendor SaaS Marketplace"
              description="B2B/B2C marketplace with multi-vendor management: product catalogues, cart, secure payment, commissions, vendor and admin dashboards, moderation, user-to-user messaging and rating system. Scalable architecture for high volume."
              isClientProject={true}
              demoLink="https://reverb.com"
              hours="650"
              technologies={["React",
                "Node.js",
                "Typescript",
                "Tailwindcss",
                "API",
                "MySQL",
                "Docker"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600"
              isBlog={false}
              title="Multivenue Restaurant Platform — Laravel/React"
              description="Full-stack platform for multi-location restaurant groups: centralised menus, venue-level operations, REST APIs, role-based access, SQL performance tuning, Dockerised deployments, and a TypeScript/React admin for franchise managers. Architecture focused on scalability, clean boundaries, and AI-assisted delivery workflows."
              isClientProject={true}
              demoLink="https://www.zenchef.com"
              hours="840"
              technologies={[
                "Laravel",
                "React",
                "Typescript",
                "MySQL",
                "Docker",
                "API",
                "Redis"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600"
              isBlog={false}
              title="Usage-Based Billing & Metering SaaS"
              description="Client platform for subscription and usage-based billing: metering pipelines, invoice generation, dunning, multi-currency plans, webhook integrations, and finance dashboards. Designed for high-volume event ingestion with idempotent APIs."
              isClientProject={true}
              demoLink="https://www.getlago.com"
              hours="520"
              technologies={[
                "React",
                "Node.js",
                "Typescript",
                "PostgreSQL",
                "Docker",
                "API"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600"
              isBlog={false}
              title="Healthcare Appointment Portal"
              description="Patient booking portal for clinics: practitioner calendars, telehealth slots, reminders, GDPR-friendly records, and a staff back-office with role permissions. Integrated with external calendar providers and SMS gateways."
              isClientProject={true}
              demoLink="https://www.doctolib.fr"
              hours="410"
              technologies={[
                "Next.js",
                "React",
                "Typescript",
                "MySQL",
                "API"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600"
              isBlog={false}
              title="ERP / Internal Management Tool"
              description="Internal management tool for a client: inventory, orders, invoicing, HR and scheduling, reporting and exports, role-based permissions, unified dashboard. Integration with existing tools and documented API."
              isClientProject={true}
              demoLink="https://katanamrp.com"
              hours="580"
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
              imgPath="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600"
              isBlog={false}
              title="Booking & Events Platform"
              description="Booking platform for venues and events: time slots, dynamic pricing, ticketing, organiser area with stats, reminders and reports. Capacity and cancellation management. Built for professional clients in the sector."
              isClientProject={true}
              demoLink="https://pretix.eu"
              hours="480"
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
              imgPath="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600"
              isBlog={false}
              title="TagPaw - Fullstack Pet Management"
              description="A comprehensive fullstack web application for managing pets and animals. Features include user authentication, pet profiles, medical records, appointment scheduling, and a complete admin dashboard. Built with modern technologies for scalability and performance."
              isClientProject={true}
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
              imgPath="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600"
              isBlog={false}
              title="Advanced Discord Bot - Fullstack"
              description="A feature-rich Discord bot with web dashboard, user management, custom commands, moderation tools, music player, and real-time notifications. Includes a full admin panel for server configuration and analytics."
              isClientProject={true}
              demoLink="https://top.gg"
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
              imgPath="https://images.unsplash.com/photo-1542751110-97427bbecf20?w=600"
              isBlog={false}
              title="Discord Community Bot - Fullstack"
              description="A comprehensive Discord bot solution for community management with automated moderation, role management, welcome systems, leveling, economy, and integrated web dashboard for server owners."
              isClientProject={true}
              demoLink="https://carl.gg"
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
              imgPath="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"
              isBlog={false}
              title="Full Admin Dashboard - Frontend"
              description="Production-ready, fully responsive admin dashboard built with React, Tailwind CSS, TypeScript and Shadcn UI."
              isClientProject={true}
              demoLink="https://refine.dev"
              hours="330"
              technologies={["Typescript",
                "React",
                "Tailwindcss"]}
            />
          </Col>
        </Row>

        <h2 className="project-heading" style={{ fontSize: "1.6em", marginTop: "30px" }}>
          <strong className="purple">Business</strong> Projects
        </h2>
        <p style={{ color: "white", marginBottom: "10px" }}>
          Ventures I founded and continue to build as CEO.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600"
              isBlog={false}
              title="SkanEat — Restaurant Ordering Platform"
              description="Founded in 2022. End-to-end SaaS for restaurants: QR Code instant ordering, customizable menus, real-time kitchen tracking, Stripe/Apple Pay/Google Pay, digital receipts, reviews, and staff dashboards. Reduces errors and speeds up service without extra hardware."
              isBusinessProject={true}
              demoLink="https://www.skaneat.com"
              hours="1850"
              technologies={[
                "React",
                "Angular",
                "Node.js",
                "Typescript",
                "Firebase",
                "API"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600"
              isBlog={false}
              title="Skaldas — Hospitality Digital Suite"
              description="Founded in 2025. Two web products for tourism professionals: Skaldas Welcome (QR/NFC digital guest guides, Wi-Fi, recommendations for short-term rentals) and Skaldas CleanTrack (housekeeping QR workflows and real-time room status for independent hotels). 100% browser-based, no app install."
              isBusinessProject={true}
              demoLink="https://www.skaldas.com"
              hours="720"
              technologies={[
                "React",
                "Node.js",
                "Typescript",
                "Tailwindcss",
                "API",
                "MySQL"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600"
              isBlog={false}
              title="Valydr — Real Estate Buyer Qualification SaaS"
              description="Founded in 2026. White-label buyer dossier platform for French estate agents: automated qualification, Tracfin and LCB-FT compliance traceability, branded PDF exports, identity checks, and audit logs. Built for agencies that need legal protection and faster signed sales."
              isBusinessProject={true}
              demoLink="https://www.valydr.com"
              hours="420"
              technologies={[
                "Next.js",
                "React",
                "Typescript",
                "Tailwindcss",
                "API",
                "PostgreSQL"]}
            />
          </Col>
        </Row>

        <h2 className="project-heading" style={{ fontSize: "1.6em", marginTop: "30px" }}>
          <strong className="purple">Personal</strong> Projects
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600"
              isBlog={false}
              title="Open Scheduling — Fullstack"
              description="Self-hosted scheduling product fork: availability rules, team round-robin, calendar sync, and embeddable booking pages. Demonstrates REST design, webhooks, and a polished React booking flow."
              demoLink="https://cal.com"
              hours="260"
              technologies={[
                "Next.js",
                "React",
                "Typescript",
                "PostgreSQL",
                "Docker",
                "API"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600"
              isBlog={false}
              title="Video Match - Fullstack"
              description="Fullstack real-time video chat app inspired by Omegle, built with React, WebRTC, Socket.IO and Node.js."
              ghLink="https://github.com/Gabriel-Gonta/Full-Admin-Dashboard.git"
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
              description="Modern, responsive UI inspired by Spotify, built with Vue.js, Vite and Tailwind CSS."
              ghLink="https://github.com/Gabriel-Gonta/spotify-frontend.git"
              hours="170"
              technologies={["Vue.js",
                "Vite",
                "Tailwindcss"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600"
              isBlog={false}
              title="GabiBook - Frontend"
              description="Sleek, modern flight-booking UI template built with React and Tailwind CSS."
              ghLink="https://github.com/Gabriel-Gonta/Gabibook"
              hours="240"
              technologies={["React",
                "Node.js",
                "Tailwindcss", 
                "HTML"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600"
              isBlog={false}
              title="GaBank - Frontend"
              description="Modern, intuitive banking-style UI template built with React and Tailwind CSS."
              ghLink="https://github.com/Gabriel-Gonta/GaBank"
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
              description="Production-ready hotel booking platform built with modern web technologies and full backend API integration."
              ghLink="https://github.com/Gabriel-Gonta/MyHotelBooker"
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
              ghLink="https://github.com/Gabriel-Gonta/my-rpg"
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
              ghLink="https://github.com/Gabriel-Gonta/my-radar"
              hours="180"
              technologies={["C"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600"
              isBlog={false}
              title="Hashing-CPP - Software"
              description="This library provides efficient, fast, and portable hashing algorithms, including CRC32, MD5, SHA1, SHA256 (SHA2), and Keccak."
              ghLink="https://github.com/Gabriel-Gonta/Hashing-CPP"
              hours="110"
              technologies={["Cplusplus"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="BurgerQuizGame - Fullstack"
              description="Adaptation of the famous French TV game show Burger Quiz, built with React."
              ghLink="https://github.com/Gabriel-Gonta/BurgerQuizGame"
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
              imgPath="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600"
              isBlog={false}
              title="MoneyManagerIOS - Software"
              description="A focused app to track revenues and expenses with a clean, visually appealing interface. Built for iOS."
              ghLink="https://github.com/Gabriel-Gonta/MoneyManagerIOS"
              hours="80"
              technologies={["Swift"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600"
              isBlog={false}
              title="ToDoList - Fullstack"
              description="Task management application built with React for efficiently organising and tracking daily tasks."
              ghLink="https://github.com/Gabriel-Gonta/ToDoList"
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
              imgPath="https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600"
              isBlog={false}
              title="Progressive Weather App - Frontend"
              description="Modern, sleek weather forecast app built with Vue.js and designed to work seamlessly across devices."
              ghLink="https://github.com/Gabriel-Gonta/WeatherApp.git"
              hours="110"
              technologies={["Vue.js", "Node.js", "HTML", "CSS"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600"
              isBlog={false}
              title="Books Online Market Analysis - Software"
              description="This project is a price-tracking tool designed to help analyze the book market by scraping data from the Books to Scrape website."
              ghLink="https://github.com/Gabriel-Gonta/AnalystBooks"
              hours="70"
              technologies={["Python", "Shell"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600"
              isBlog={false}
              title="Online Flight Ticket Booking - Fullstack"
              description="Web-based platform that lets users search for flights, book tickets, and make secure payments online."
              ghLink="https://github.com/Gabriel-Gonta/OnlineFlightTicketBooking"
              hours="200"
              technologies={["PHP", "HTML", "CSS", "Node.js", "MySQL"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600"
              isBlog={false}
              title="Cybersecurity Tools - Software"
              description="Four essential tools for cybersecurity enthusiasts and professionals: hashing, network scanning, and related utilities."
              ghLink="https://github.com/Gabriel-Gonta/Cybersecurity-Tools.git"
              hours="250"
              technologies={["Python", "Kali"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600"
              isBlog={false}
              title="Keylogger - Software"
              description="Security testing tool that captures keyboard, mouse, screenshot and microphone inputs and sends the data securely to a chosen email address."
              ghLink="https://github.com/Gabriel-Gonta/Keylogger.git"
              hours="120"
              technologies={["Kali", "Python"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600"
              isBlog={false}
              title="Email Spoofing Toolkit - Software"
              description="React-based app for educational use, exploring email spoofing concepts and header manipulation."
              ghLink="https://github.com/Gabriel-Gonta/Email-Spoofing.git"
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
