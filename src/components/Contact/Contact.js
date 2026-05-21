import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import "./Contact.css";

const CONTACT_EMAIL = "gonta.gabriel.pro@gmail.com";
const FORM_SUBMIT_URL = `https://formsubmit.co/${CONTACT_EMAIL}`;
const REDIRECT_URL =
  "https://gabriel-gonta.github.io/my-portfolio/?contact=sent#/contact";

function Contact() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("contact") === "sent") {
      setStatus("Message envoyé avec succès !");
      window.history.replaceState(
        {},
        document.title,
        `${window.location.pathname}#/contact`
      );
    }
  }, []);

  return (
    <Container fluid className="contact-section-wrapper">
      <Container className="contact-container">
        <h2 className="contact-title">Contactez-moi</h2>
        <form
          action={FORM_SUBMIT_URL}
          method="POST"
          className="contact-form"
        >
          <input type="hidden" name="_subject" value="Nouveau message — Portfolio" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={REDIRECT_URL} />
          <input
            type="text"
            name="name"
            placeholder="Nom"
            required
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="contact-input"
          />
          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            required
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Votre message"
            required
            className="contact-textarea"
          />
          <button type="submit" className="contact-button">
            Envoyer
          </button>
          {status && <p className="contact-status">{status}</p>}
        </form>
        <p style={{ color: "#a588c0", marginTop: "16px", fontSize: "0.9rem" }}>
          Ou écrivez-moi directement :{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "#c770f0" }}>
            {CONTACT_EMAIL}
          </a>
        </p>
      </Container>
      <Particle />
    </Container>
  );
}

export default Contact;
