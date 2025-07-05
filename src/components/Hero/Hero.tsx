import { motion } from 'framer-motion';
import './Hero.scss';

const Hero = () => {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero__content">
        <h1>Lester</h1>
        <h2>Web Developer & UI/UX Designer</h2>
        <a href="#projects" className="hero__cta">View My Work</a>
      </div>
    </motion.section>
  );
};

export default Hero;