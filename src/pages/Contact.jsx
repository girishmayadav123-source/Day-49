
import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! We will contact you soon.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      message: ""
    });
  };

  return (
    <div>
      <style>{`
        .contact {
          min-height: 100vh;
          padding: 70px 25px;
          background: #fff8f5;
        }

        .contact h1 {
          text-align: center;
          color: #7b4655;
          font-size: 42px;
        }

        .contact-container {
          max-width: 1000px;
          margin: 45px auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .contact-info {
          background: #7b4655;
          color: white;
          padding: 35px;
          border-radius: 15px;
        }

        .contact-info h2 {
          font-size: 28px;
        }

        .contact-info p {
          line-height: 1.8;
        }

        .contact-form {
          background: white;
          padding: 35px;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 13px;
          margin-bottom: 15px;
          border: 1px solid #ddd;
          border-radius: 7px;
          font-size: 15px;
        }

        .contact-form textarea {
          height: 120px;
          resize: none;
        }

        .contact-form button {
          width: 100%;
          padding: 14px;
          border: none;
          border-radius: 25px;
          background: #a15c70;
          color: white;
          font-size: 16px;
          cursor: pointer;
        }

        @media (max-width: 750px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="contact">
        <h1>Let's Plan Your Wedding</h1>

        <div className="contact-container">

          <div className="contact-info">
            <h2>EverAfter Weddings</h2>

            <p>
              We would love to hear about your wedding plans.
              Contact us and let's create something beautiful together.
            </p>

            <p>📍 Hyderabad, India</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ hello@everafterweddings.com</p>

            <h3>Wedding Planner</h3>
            <p>Available for consultations and event planning.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Tell us about your wedding..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">
              Send Inquiry
            </button>
          </form>

        </div>
      </section>
    </div>
  );
}

export default Contact;

