
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <style>{`
        .footer {
          background: #7b4655;
          color: white;
          padding: 55px 7% 20px;
        }

        .footer-container {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 50px;
        }

        .footer-brand h2 {
          font-size: 28px;
          margin: 0 0 12px;
        }

        .footer-brand p {
          color: #f4dddd;
          line-height: 1.7;
          max-width: 350px;
        }

        .footer-section h3 {
          margin-bottom: 18px;
          font-size: 19px;
        }

        .footer-section a {
          display: block;
          color: #f4dddd;
          text-decoration: none;
          margin-bottom: 10px;
          transition: 0.3s;
        }

        .footer-section a:hover {
          color: white;
          padding-left: 5px;
        }

        .footer-section p {
          color: #f4dddd;
          line-height: 1.7;
          margin: 7px 0;
        }

        .footer-bottom {
          max-width: 1100px;
          margin: 40px auto 0;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.25);
          text-align: center;
          color: #f4dddd;
          font-size: 14px;
        }

        @media (max-width: 750px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
      `}</style>

      <div className="footer">

        <div className="footer-container">

          <div className="footer-brand">
            <h2>EverAfter Weddings</h2>

            <p>
              Creating elegant celebrations, beautiful memories,
              and unforgettable moments for every couple.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>

            <p>📍 Hyderabad, India</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ hello@everafterweddings.com</p>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 EverAfter Weddings. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
