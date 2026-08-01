import "./Trainer.css";
import trainer from "../../assets/images/Trainer.jpeg";
import { Award, Dumbbell, BadgeCheck } from "lucide-react";

function Trainer() {
  return (
    <section className="trainer-page">

      <div className="trainer-container">

        {/* LEFT IMAGE */}
        <div className="trainer-image">
          <img src={trainer} alt="K Prem Kumar" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="trainer-content">

          <span className="trainer-tag">
            PROFESSIONAL FITNESS TRAINER
          </span>

          <h1>
            K. PREM <span>KUMAR</span>
          </h1>

          <p className="trainer-description">
            Welcome to New Spartans Gym. I'm K. Prem Kumar, a certified
            fitness trainer with 4 years of experience helping members
            achieve their fitness goals through professional guidance,
            strength training and personalized workout plans.
          </p>

          {/* DETAILS */}
          <div className="trainer-cards">

            <div className="trainer-card">
              <Award size={35} />
              <h3>Experience</h3>
              <p>4 Years</p>
            </div>

            <div className="trainer-card">
              <Dumbbell size={35} />
              <h3>Speciality</h3>
              <p>Strength Training</p>
            </div>

            <div className="trainer-card">
              <BadgeCheck size={35} />
              <h3>Trainer</h3>
              <p>Certified Coach</p>
            </div>

          </div>

          {/* MEMBERSHIP */}
          <h2 className="membership-heading">
            Membership Plans
          </h2>

          <div className="membership-grid">

            <div className="membership-card">
              <h4>Monthly</h4>
              <h2>₹600</h2>
            </div>

            <div className="membership-card featured">
              <h4>3 Months</h4>
              <h2>₹1500</h2>
            </div>

            <div className="membership-card">
              <h4>Annual</h4>
              <h2>₹5000</h2>
            </div>

          </div>

          <a
            href="https://wa.me/919994196906"
            target="_blank"
            rel="noreferrer"
            className="join-button"
          >
            JOIN NOW
          </a>

        </div>

      </div>

    </section>
  );
}

export default Trainer;