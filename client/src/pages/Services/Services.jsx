import { motion } from "framer-motion";
import {
  Activity,
  Dumbbell,
  HeartPulse,
  TrendingUp,
  UserRoundCheck,
} from "lucide-react";
import "./Services.css";

const services = [
  {
    icon: HeartPulse,
    title: "Cardio",
    text: "Improve cardiovascular fitness, endurance and overall conditioning.",
  },
  {
    icon: TrendingUp,
    title: "Weight Gain",
    text: "Structured training focused on healthy muscle and strength development.",
  },
  {
    icon: Activity,
    title: "Strength Training",
    text: "Develop functional strength through progressive resistance training.",
  },
  {
    icon: Dumbbell,
    title: "Weight Training",
    text: "Train with resistance equipment to improve muscle strength and physique.",
  },
  {
    icon: UserRoundCheck,
    title: "Personal Training",
    text: "Get focused one-to-one guidance based on your individual fitness goals.",
  },
];

function Services() {
  return (
    <>
      <section className="page-hero">
        <div>
          <span className="section-label">Train With Purpose</span>
          <h1>OUR <span>SERVICES</span></h1>
        </div>
      </section>

      <section className="services-section page-container">
        <div className="services-heading">
          <span className="section-label">What We Offer</span>

          <h2 className="section-title">
            TRAIN FOR YOUR <span>GOAL.</span>
          </h2>

          <p className="section-description">
            Different goals need different approaches. Choose the training
            style that supports your fitness journey.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                className="service-card"
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="service-number">
                  0{index + 1}
                </span>

                <Icon />

                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </motion.article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Services;