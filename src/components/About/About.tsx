import { motion } from 'framer-motion';
import './About.scss';

const About = () => {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="about__container">
        <h2>About Me</h2>
        <p>
          I am a passionate web developer with a strong focus on creating beautiful and functional user experiences. My journey in technology has been driven by a desire to solve problems and build things that make a difference.
        </p>
        <h3>My Motivation</h3>
        <p>
          I am motivated by the challenge of turning complex ideas into simple, elegant, and intuitive solutions. I believe that technology should be accessible to everyone, and I strive to create products that are not only powerful but also easy to use.
        </p>
      </div>
    </motion.section>
  );
};

export default About;