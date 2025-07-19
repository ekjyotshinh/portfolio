import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>If you’d like to chat about an opportunity or just say hi — my inbox is open.</p>

        <div className="contact-details">
          <p><strong>Email:</strong> <a href="mailto:ekjyotshinh@gmail.com">ekjyotshinh@gmail.com</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/ekjyotshinh" target="_blank" rel="noopener noreferrer">linkedin.com/in/ekjyotshinh</a></p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
