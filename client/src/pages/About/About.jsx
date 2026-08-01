import { motion } from "framer-motion";
import { Dumbbell, Target, Trophy, Users } from "lucide-react";
import gymPhoto from "../../assets/images/Gym Photo 1.jpeg";
import "./About.css";

function About() {
  return (
    <>
      <section className="page-hero">
        <div>
          <span className="section-label">Our Story</span>
          <h1>ABOUT <span>US</span></h1>
        </div>
      </section>

      <section className="about-main page-container">
        <motion.div
          className="about-photo"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img src={gymPhoto} alt="New Spartans Gym members" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">New Spartans Gym</span>

          <h2 className="section-title">
            BUILT FOR <span>RESULTS.</span>
          </h2>

          <p className="section-description">
            Established in 2023, New Spartans Gym provides a focused training
            environment for people who want to improve their strength, fitness
            and physique.
          </p>

          <p className="section-description">
            From beginners taking their first step to experienced fitness
            enthusiasts, our goal is simple — provide the environment,
            motivation and training support needed to achieve real progress.
          </p>
        </motion.div>
      </section>

      <section className="about-values">
        <div className="page-container values-grid">
          <div><Target /><h3>Our Mission</h3><p>Help every member work towards meaningful fitness goals.</p></div>
          <div><Dumbbell /><h3>Strong Training</h3><p>A focused environment built for consistent training.</p></div>
          <div><Users /><h3>Community</h3><p>A motivating fitness community where progress matters.</p></div>
          <div><Trophy /><h3>Real Results</h3><p>We believe consistency and guidance create transformation.</p></div>
        </div>
      </section>
    </>
  );
}

export default About;