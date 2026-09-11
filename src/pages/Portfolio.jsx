
import React from "react";

function Portfolio() {
  const weddings = [
    {
      image: "https://images.unsplash.com/photo-1519741497674-611481863552",
      title: "Royal Garden Wedding",
      text: "A beautiful outdoor celebration with elegant floral decorations."
    },
    {
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
      title: "Elegant Palace Wedding",
      text: "A grand celebration designed with luxury and traditional elegance."
    },
    {
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
      title: "Romantic Evening",
      text: "A dreamy evening wedding filled with lights, flowers, and romance."
    }
  ];

  return (
    <div>
      <style>{`
        .portfolio {
          padding: 70px 30px;
          background: #fff8f5;
          text-align: center;
        }

        .portfolio h1 {
          color: #7b4655;
          font-size: 42px;
        }

        .portfolio-grid {
          max-width: 1100px;
          margin: 45px auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .portfolio-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
        }

        .portfolio-card img {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }

        .portfolio-content {
          padding: 20px;
        }

        .portfolio-content h2 {
          color: #a15c70;
        }

        .portfolio-content p {
          color: #666;
          line-height: 1.6;
        }

        @media (max-width: 800px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="portfolio">
        <h1>Our Wedding Portfolio</h1>

        <p>
          A glimpse of the beautiful celebrations we have planned.
        </p>

        <div className="portfolio-grid">
          {weddings.map((wedding, index) => (
            <div className="portfolio-card" key={index}>
              <img src={wedding.image} alt={wedding.title} />

              <div className="portfolio-content">
                <h2>{wedding.title}</h2>
                <p>{wedding.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
