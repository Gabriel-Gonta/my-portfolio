import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const EMAILJS_SERVICE_ID = "service_7x979ov";
const EMAILJS_TEMPLATE_ID = "template_m41sgho";
const EMAILJS_PUBLIC_KEY = "fVcg_Y7ZzNliC3pTv";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          setStatus("Message envoyé avec succès !");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus(
            "Impossible d'envoyer le message (erreur EmailJS). Vérifiez la configuration du service ou contactez-moi par e-mail : gonta.gabriel.pro@gmail.com"
          );
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <Container fluid className="contact-section-wrapper">
      <Container className="contact-container">
        <h2 className="contact-title">Contactez-moi</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Nom"
            required
            className="contact-input"
          />
          <input
            type="email"
            name="user_email"
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
          <button type="submit" className="contact-button" disabled={sending}>
            {sending ? "Envoi en cours..." : "Envoyer"}
          </button>
          {status && <p className="contact-status">{status}</p>}
        </form>
      </Container>
      <Particle />
    </Container>
  );
}

export default Contact;
