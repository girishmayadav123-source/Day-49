
import React from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Ananya & Rahul",
      location: "Hyderabad",
      message:
        "EverAfter Weddings made our wedding day absolutely beautiful. Everything was planned perfectly and we enjoyed every moment.",
    },
    {
      name: "Sneha & Arjun",
      location: "Bangalore",
      message:
        "The decoration, coordination, and overall planning were amazing. The team was very friendly and professional.",
    },
    {
      name: "Priya & Karthik",
      location: "Chennai",
      message:
        "Our wedding was exactly how we imagined it. EverAfter Weddings handled everything smoothly and created wonderful memories.",
    },
    {
      name: "Megha & Varun",
      location: "Vijayawada",
      message:
        "From the first meeting to the final ceremony, the team was supportive and creative. Highly recommended!",
    },
  ];

  return (
    <div>
      <style>{`
        .testimonial-page {
          background: #fff8f7;
          padding: 70px 7%;
          min-height: 80vh;
        }

        .testimonial-heading {
          text-align: center;
          margin-bottom: 50px;
        }

        .testimonial-heading span {
          color: #a15c70;
          font-size: 14px;
          letter-spacing: 3px;
          font-weight: bold;
        }

        .testimonial-heading h1 {
          color: #7b4655;
          font-size: 42px;
          margin: 12px 0;
        }

        .testimonial-heading p {
          color: #666;
          max-width: 650px;
          margin: auto;
          line-height: 1.7;
        }

        .testimonial-container {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }

        .testimonial-card {
          background: white;
          padding: 30px;
          border-radius: 18px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          border-top: 4px solid #c58a7a;
        }

        .stars {
          color: #d39b32;
          font-size: 21px;
          margin-bottom: 15px;
        }

        .testimonial-card p {
          color: #555;
          line-height: 1.8;
          font-size: 16px;
          margin-bottom: 20px;
        }

        .testimonial-card h3 {
          color: #7b4655;
          margin: 0 0 5px;
        }

        .testimonial-card small {
          color: #999;
        }

        @media (max-width: 700px) {
          .testimonial-container {
            grid-template-columns: 1fr;
          }

          .testimonial-heading h1 {
            font-size: 32px;
          }

          .testimonial-page {
            padding: 50px 5%;
          }
        }
      `}</style>

      <section className="testimonial-page">
        <div className="testimonial-heading">
          <span>REAL LOVE STORIES</span>
          <h1>What Our Couples Say</h1>
          <p>
            Every wedding is special to us. Here are some words from couples
            who trusted us to make their celebrations unforgettable.
          </p>
        </div>

        <div className="testimonial-container">
          {testimonials.map((review, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">★★★★★</div>

              <p>"{review.message}"</p>

              <h3>{review.name}</h3>
              <small>{review.location}</small>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Testimonials;

