import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo/Logo.jpeg";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-container">

        {/* LOGO */}
        <NavLink to="/" className="nav-logo" onClick={closeMenu}>
          <img src={logo} alt="New Spartans Gym" />

          <div>
            <strong>NEW SPARTANS</strong>
            <span>GYM</span>
          </div>
        </NavLink>

        {/* MENU */}
        <nav className={open ? "nav-menu active" : "nav-menu"}>

          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/trainer" onClick={closeMenu}>
            Trainer
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/transformations" onClick={closeMenu}>
            Transformations
          </NavLink>

          <NavLink to="/gallery" onClick={closeMenu}>
            Gallery
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

        </nav>

        {/* JOIN BUTTON */}
        <NavLink
          to="/contact"
          className="nav-join"
        >
          Join Now
        </NavLink>

        {/* MOBILE MENU BUTTON */}
        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Open navigation"
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;