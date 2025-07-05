import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
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
      <div className="contact__links">
        <a href="mailto:jordi.lf.cb@gmail.com" className="contact__link">
          <MdEmail /> Email
        </a>
        <a href="https://wa.me/56946976778" target="_blank" rel="noopener noreferrer" className="contact__link">
          <FaWhatsapp /> WhatsApp
        </a>
        <a href="https://www.linkedin.com/in/jordilesther" target="_blank" rel="noopener noreferrer" className="contact__link">
          <FaLinkedinIn /> LinkedIn
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
