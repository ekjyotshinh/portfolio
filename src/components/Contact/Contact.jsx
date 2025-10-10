import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <h2 className="section-heading">Get In Touch</h2>
      <p>
        Whether you have a project in mind or just want to connect, feel free
        to reach out. I’m always open to exciting opportunities and
        interesting conversations.
      </p>

      <div className="contact-details">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:ekjyotshinh@gmail.com">ekjyotshinh@gmail.com</a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://linkedin.com/in/ekjyotshinh"
            target="_blank"
            rel="noopener noreferrer">
            linkedin.com/in/ekjyotshinh
          </a>
        </p>
      </div>
    </>
  );
};

export default Contact;
