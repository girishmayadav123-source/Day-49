
import React from "react";

function Home() {
  return (
    <div>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Georgia, serif;
        } 

        .hero {
          min-height: 90vh;
          background: linear-gradient(
              rgba(70, 35, 45, 0.55),
              rgba(70, 35, 45, 0.55)
            ),
            url("https://images.unsplash.com/photo-1519225421980-715cb0215aed")
              center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 40px 20px;
        }

        .hero-content {
          max-width: 800px;
        }

        .hero h1 {
          font-size: 58px;
          margin-bottom: 15px;
          letter-spacing: 2px;
        }

        .hero p {
          font-size: 21px;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .hero button {
          padding: 14px 30px;
          border: none;
          background: #d8a48f;
          color: white;
          font-size: 16px;
          cursor: pointer;
          border-radius: 25px;
        }

        .intro {
          padding: 70px 20px;
          text-align: center;
          background: #fff8f5;
        }

        .intro h2 {
          color: #7b4655;
          font-size: 34px;
        }

        .intro p {
          max-width: 750px;
          margin: auto;
          color: #555;
          line-height: 1.8;
          font-size: 17px;
        }

        .highlights {
          display: flex;
          justify-content: center;
          gap: 25px;
          flex-wrap: wrap;
          margin-top: 40px;
        }

        .highlight {
          width: 250px;
          padding: 25px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
        }

        .highlight h3 {
          color: #a15c70;
        }
      `}</style>

      <section className="hero">
        <div className="hero-content">
          <h1>EverAfter Weddings</h1>
          <p>
            Creating beautiful wedding experiences filled with love,
            elegance, and unforgettable memories.
          </p>
          <button>Plan Your Wedding</button>
        </div>
      </section>

      <section className="intro">
        <h2>Your Dream Wedding, Beautifully Planned</h2>

        <p>
          At EverAfter Weddings, we turn your wedding dreams into reality.
          From intimate celebrations to grand occasions, our team takes care
          of every detail with creativity, care, and perfection.
        </p>

        <div className="highlights">
          <div className="highlight">
            <h3>Elegant Planning</h3>
            <p>Every detail is planned to match your unique wedding vision.</p>
          </div>

          <div className="highlight">
            <h3>Creative Designs</h3>
            <p>Beautiful themes and decorations designed specially for you.</p>
          </div>

          <div className="highlight">
            <h3>Stress-Free Events</h3>
            <p>We manage everything so you can enjoy your special day.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
