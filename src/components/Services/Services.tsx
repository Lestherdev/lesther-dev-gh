import { motion } from 'framer-motion';
import './Services.scss';

const Services = () => {
  const services = [
    { title: 'Frontend Development', description: 'Creating responsive and dynamic user interfaces.' },
    { title: 'UI/UX Design', description: 'Designing intuitive and engaging user experiences.' },
    { title: 'Consulting', description: 'Providing expert advice to help you achieve your goals.' },
  ];

  return (
    <motion.section
      id="services"
      className="services"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>Services</h2>
      <div className="services__list">
        {services.map((service) => (
          <div key={service.title} className="service-item">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;