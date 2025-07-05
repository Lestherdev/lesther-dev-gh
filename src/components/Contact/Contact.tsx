import React from 'react';
import { motion } from 'framer-motion';
import './Contact.scss';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>Contact Me</h2>
      <form action="https://formspree.io/f/your_form_id" method="POST">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      <div className="contact__socials">
        <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
      </div>
    </motion.section>
  );
};

export default Contact;