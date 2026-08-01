import { motion } from "framer-motion";

import t1 from "../../assets/images/Transformation 1.jpeg";
import t2 from "../../assets/images/Transformation 2.jpeg";
import t3 from "../../assets/images/Transformation 3.jpeg";
import t4 from "../../assets/images/Transformation 4.jpeg";

import "./Transformations.css";

const transformations = [
  {
    image: t1,
    title: "Transformation Journey",
    description: "Consistency creates change.",
  },
  {
    image: t2,
    title: "90 Day Challenge",
    description: "Focused training. Visible progress.",
  },
  {
    image: t3,
    title: "Weight Gain Journey",
    description: "Building strength and confidence.",
  },
  {
    image: t4,
    title: "Fitness Progress",
    description: "Real effort. Real progress.",
  },
];

function Transformations() {
  return (
    <>
      <section className="page-hero">
        <div>
          <span className="section-label">Real Progress</span>
          <h1>TRANSFORMATION <span>STORIES</span></h1>
        </div>
      </section>

      <section className="transform-section page-container">
        <div className="transform-intro">
          <span className="section-label">Member Results</span>

          <h2 className="section-title">
            RESULTS THAT <span>SPEAK.</span>
          </h2>

          <p className="section-description">
            These transformation journeys represent commitment, consistency
            and dedication towards personal fitness goals.
          </p>
        </div>

        <div className="transform-grid">
          {transformations.map((item, index) => (
            <motion.article
              className="transform-card"
              key={index}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="transform-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="transform-info">
                <span>0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="results-note">
          Individual results may vary. Fitness progress depends on factors such
          as training consistency, nutrition and individual circumstances.
        </p>
      </section>
    </>
  );
}

export default Transformations;