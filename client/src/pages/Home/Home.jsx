import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Dumbbell,
  HeartPulse,
  Trophy,
  Users,
} from "lucide-react";

import heroImage from "../../assets/images/Gym Photo 4.jpeg";
import gymImage from "../../assets/images/Gym Photo 2.jpeg";
import transformation from "../../assets/images/Transformation 2.jpeg";

import "./Home.css";

function Home() {
  return (
    <>
      <section
        className="home-hero"
        style={{ backgroundImage: `url("${heroImage}")` }}
      >
        <div className="home-overlay"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-small">WELCOME TO NEW SPARTANS GYM</p>

          <h1>
            BUILD YOUR <span>STRONGEST</span> SELF
          </h1>

          <p className="hero-description">
            Train harder. Get stronger. Transform yourself with professional
            fitness training and a community built for results.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="primary-btn">
              Start Training <ArrowRight size={19} />
            </Link>

            <Link to="/transformations" className="secondary-btn">
              View Results
            </Link>
          </div>
        </motion.div>

        <div className="hero-side-text">EST. 2023</div>
      </section>

      <section className="home-features">
        <div className="feature">
          <Dumbbell />
          <div>
            <h3>Weight Training</h3>
            <p>Build strength and muscle</p>
          </div>
        </div>

        <div className="feature">
          <HeartPulse />
          <div>
            <h3>Cardio Training</h3>
            <p>Improve stamina and fitness</p>
          </div>
        </div>

        <div className="feature">
          <Users />
          <div>
            <h3>Personal Training</h3>
            <p>Focused guidance for results</p>
          </div>
        </div>

        <div className="feature">
          <Trophy />
          <div>
            <h3>Proven Results</h3>
            <p>Real transformation journeys</p>
          </div>
        </div>
      </section>

      <section className="home-about">
        <motion.div
          className="home-about-image"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img src={gymImage} alt="New Spartans Gym interior" />
          <div className="experience-box">
            <strong>2023</strong>
            <span>Established</span>
          </div>
        </motion.div>

        <motion.div
          className="home-about-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Who We Are</span>

          <h2 className="section-title">
            MORE THAN A GYM. <span>A LIFESTYLE.</span>
          </h2>

          <p className="section-description">
            New Spartans Gym has been helping people transform themselves since
            2023. Our training environment is built around strength,
            consistency and measurable results.
          </p>

          <p className="section-description">
            Whether your goal is weight gain, strength development, weight
            training or overall fitness, we help you work towards it with the
            right guidance.
          </p>

          <Link to="/about" className="text-link">
            Discover Our Gym <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      <section className="home-result">
        <div className="result-content">
          <span className="section-label">Real People. Real Results.</span>

          <h2 className="section-title">
            YOUR TRANSFORMATION <span>STARTS HERE.</span>
          </h2>

          <p>
            Every transformation starts with one decision. See the progress
            achieved through consistency, training and dedication.
          </p>

          <Link to="/transformations" className="primary-btn">
            See Transformations <ArrowRight size={18} />
          </Link>
        </div>

        <div className="result-image">
          <img src={transformation} alt="Gym transformation result" />
        </div>
      </section>

      <section className="home-cta">
        <span>STOP WAITING. START TRAINING.</span>
        <h2>READY TO BECOME STRONGER?</h2>

        <Link to="/contact" className="dark-btn">
          Join New Spartans Gym <ArrowRight size={18} />
        </Link>
      </section>
    </>
  );
}

export default Home;