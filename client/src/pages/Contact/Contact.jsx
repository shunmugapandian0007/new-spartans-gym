import { useState } from "react";
import {
  Clock3,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    goal: "",
    message: "",
  });

  // INPUT CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // WHATSAPP SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello New Spartans Gym,

Name: ${form.name}
Phone: ${form.phone}
Fitness Goal: ${form.goal}
Message: ${form.message}`;

    // Correct Gym WhatsApp Number
    // India Country Code: 91
    // Gym Number: 9994196906
    const whatsappNumber = "919994196906";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div>
          <span className="section-label">
            Take The First Step
          </span>

          <h1>
            CONTACT <span>US</span>
          </h1>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section page-container">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <span className="section-label">
            Get In Touch
          </span>

          <h2 className="section-title">
            START YOUR <span>JOURNEY.</span>
          </h2>

          <p className="section-description">
            Ready to start training? Contact New Spartans Gym
            and take the first step towards your fitness goal.
          </p>

          <div className="contact-details">

            {/* ADDRESS */}
            <div>
              <MapPin />

              <span>
                <strong>Visit Us</strong>
                1S/2, 5th Cross Street, Ambai Road,
                <br />
                Opp. JK Mall, Alangulam
              </span>
            </div>

            {/* PHONE */}
            <div>
              <Phone />

              <span>
                <strong>Call / WhatsApp</strong>
                9994196906
              </span>
            </div>

            {/* GYM TIMINGS */}
            <div>
              <Clock3 />

              <span>
                <strong>Gym Timings</strong>
                Morning: 5:00 AM – 9:30 AM
                <br />
                Female Special: 9:30 AM – 11:30 AM
                <br />
                Evening: 5:00 PM – 9:30 PM
              </span>
            </div>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/new_spartans_gym?igsh=eWYwOWlzM29sazJj"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-instagram-icon">
                IG
              </span>

              <span>
                <strong>Instagram</strong>
                @new_spartans_gym
              </span>
            </a>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <span className="form-tag">
            FREE ENQUIRY
          </span>

          <h3>LET'S GET STARTED</h3>

          {/* NAME */}
          <label>
            Your Name

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </label>

          {/* PHONE */}
          <label>
            Phone Number

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />
          </label>

          {/* FITNESS GOAL */}
          <label>
            Fitness Goal

            <select
              name="goal"
              value={form.goal}
              onChange={handleChange}
              required
            >
              <option value="">
                Select your goal
              </option>

              <option value="Weight Gain">
                Weight Gain
              </option>

              <option value="Strength Training">
                Strength Training
              </option>

              <option value="Weight Training">
                Weight Training
              </option>

              <option value="Cardio Fitness">
                Cardio Fitness
              </option>

              <option value="Personal Training">
                Personal Training
              </option>
            </select>
          </label>

          {/* MESSAGE */}
          <label>
            Message

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your goal..."
            />
          </label>

          {/* WHATSAPP BUTTON */}
          <button type="submit">
            Send On WhatsApp
            <Send size={18} />
          </button>

        </form>

      </section>
    </>
  );
}

export default Contact;