import { motion } from 'framer-motion';
import './Skills.scss';

const Skills = () => {
  const skills = [
    { name: 'React', icon: '' },
    { name: 'Node.js', icon: '' },
    { name: 'Python', icon: '' },
    { name: 'Figma', icon: '' },
    { name: 'TypeScript', icon: '' },
    { name: 'Sass', icon: '' },
  ];

  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>Skills</h2>
      <div className="skills__list">
        {skills.map((skill) => (
          <div key={skill.name} className="skills__item">
            <div className="skills__icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;