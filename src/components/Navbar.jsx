
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <style>{`
        * {
          box-sizing: border-box;
        }

        nav {
          width: 100%;
          padding: 16px 7%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #ffffff;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .logo {
          text-decoration: none;
          color: #7b4655;
          font-size: 27px;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .logo span {
          display: block;
          font-size: 9px;
          color: #c58a7a;
          letter-spacing: 3px;
          text-align: center;
          margin-top: 3px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-links a {
          text-decoration: none;
          color: #555;
          font-size: 16px;
          transition: 0.3s;
        }

        .nav-links a:hover {
          color: #a15c70;
        }

        .nav-contact {
          background: #a15c70;
          color: white !important;
          padding: 10px 20px;
          border-radius: 25px;
        }

        .nav-contact:hover {
          background: #7b4655;
        }

        @media (max-width: 750px) {
          nav {
            flex-direction: column;
            gap: 15px;
          }

          .nav-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
          }
        }
      `}</style>

      <Link to="/" className="logo">
        EverAfter
        <span>WEDDINGS</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact" className="nav-contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
