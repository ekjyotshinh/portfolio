import React from "react";
import "./Contact.css";
import { general } from "../../data/profileData";

const Contact = () => {
  return (
    <>
      <h2 className="section-heading">Get In Touch</h2>
      <p>
        Whether you have a project in mind or just want to connect, feel free to
        reach out. I’m always open to exciting opportunities and interesting
        conversations.
      </p>

      <div className="contact-details">
        <p>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${general.email}`}>{general.email}</a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href={general.linkedin}
            target="_blank"
            rel="noopener noreferrer">
            linkedin.com/in/ekjyotshinh
          </a>
        </p>
        <p>
          <strong>Github:</strong>{" "}
          <a
            href={general.github}
            target="_blank"
            rel="noopener noreferrer">
            github.com/ekjyotshinh
          </a>
        </p>
      </div>
    </>
  );
};

export default Contact;
