import { motion } from "framer-motion";

import gym1 from "../../assets/images/Gym Photo 1.jpeg";
import gym2 from "../../assets/images/Gym Photo 2.jpeg";
import gym3 from "../../assets/images/Gym Photo 3.jpeg";
import gym4 from "../../assets/images/Gym Photo 4.jpeg";

import "./Gallery.css";

const photos = [gym1, gym2, gym3, gym4];

function Gallery() {
  return (
    <>
      <section className="page-hero">
        <div>
          <span className="section-label">Inside The Gym</span>
          <h1>OUR <span>GALLERY</span></h1>
        </div>
      </section>

      <section className="gallery-section page-container">
        <div className="gallery-heading">
          <span className="section-label">New Spartans Gym</span>

          <h2 className="section-title">
            WHERE THE <span>WORK HAPPENS.</span>
          </h2>
        </div>

        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <motion.div
              className={`gallery-item gallery-item-${index + 1}`}
              key={photo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={photo}
                alt={`New Spartans Gym gallery ${index + 1}`}
              />

              <div className="gallery-overlay">
                <span>NEW SPARTANS GYM</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Gallery;