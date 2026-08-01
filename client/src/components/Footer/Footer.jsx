import { MapPin, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/Logo.jpeg";
import "./Footer.css";

function Footer() {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* BRAND */}
        <div className="footer-brand">
          <img src={logo} alt="New Spartans Gym logo" />

          <h3>NEW SPARTANS GYM</h3>

          <p>
            Train stronger. Stay consistent. Become the best version of
            yourself.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4>Quick Links</h4>

          <div className="footer-links">

            <NavLink to="/" onClick={handleClick}>
              Home
            </NavLink>

            <NavLink to="/about" onClick={handleClick}>
              About
            </NavLink>

            <NavLink to="/trainer" onClick={handleClick}>
              Trainer
            </NavLink>

            <NavLink to="/services" onClick={handleClick}>
              Services
            </NavLink>

            <NavLink to="/transformations" onClick={handleClick}>
              Transformations
            </NavLink>

            <NavLink to="/gallery" onClick={handleClick}>
              Gallery
            </NavLink>

            <NavLink to="/contact" onClick={handleClick}>
              Contact
            </NavLink>

          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h4>Contact</h4>

          <p className="footer-contact">
            <MapPin size={18} />
            1S/2, 5th Cross Street, Ambai Road,
            Opp. JK Mall, Alangulam
          </p>

          <p className="footer-contact">
            <Phone size={18} />
            9994196906
          </p>

          <a
            className="footer-contact"
            href="https://www.instagram.com/new_spartans_gym?igsh=eWYwOWlzM29sazJj"
            target="_blank"
            rel="noreferrer"
          >
            <span className="instagram-icon">IG</span>
            @new_spartans_gym
          </a>

        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} New Spartans Gym. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;