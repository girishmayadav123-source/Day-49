
import React from "react";

function Services() {
  const services = [
    {
      icon: "💍",
      title: "Full Wedding Planning",
      description:
        "Complete planning and coordination from the first idea to the final wedding ceremony."
    },
    {
      icon: "🌸",
      title: "Venue Decoration",
      description:
        "Elegant stage decorations, floral arrangements, lighting, and beautiful wedding themes."
    },
    {
      icon: "👰",
      title: "Bridal & Groom Styling",
      description:
        "Professional styling support to help the bride and groom look their best on their special day."
    },
    {
      icon: "📸",
      title: "Photography Coordination",
      description:
        "We coordinate photographers and ensure all the important wedding moments are captured."
    },
    {
      icon: "🍽️",
      title: "Catering & Entertainment",
      description:
        "Delicious catering options and entertainment arrangements to make your celebration memorable."
    },
    {
      icon: "🎉",
      title: "Event Coordination",
      description:
        "Professional on-day coordination to ensure your wedding runs smoothly and beautifully."
    }
  ];

  return (
    <div>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .services-page {
          min-height: 100vh;
          padding: 70px 30px;
          background: #fff8f5;
          text-align: center;
        }

        .services-page h1 {
          color: #7b4655;
          font-size: 42px;
          margin-bottom: 12px;
        }

        .services-page .subtitle {
          max-width: 700px;
          margin: 0 auto 50px;
          color: #666;
          font-size: 17px;
          line-height: 1.7;
        }

        .services-container {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .service-card {
          background: white;
          padding: 35px 25px;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          transition: 0.3s;
        }

        .service-card:hover {
          transform: translateY(-8px);
        }

        .service-icon {
          font-size: 42px;
          margin-bottom: 15px;
        }

        .service-card h2 {
          color: #a15c70;
          font-size: 22px;
          margin-bottom: 12px;
        }

        .service-card p {
          color: #666;
          line-height: 1.7;
          font-size: 15px;
        }

        @media (max-width: 800px) {
          .services-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 550px) {
          .services-container {
            grid-template-columns: 1fr;
          }

          .services-page h1 {
            font-size: 34px;
          }
        }
      `}</style>

      <section className="services-page">
        <h1>Our Wedding Services</h1>

        <p className="subtitle">
          From planning and decoration to photography and entertainment,
          EverAfter Weddings provides everything you need for a beautiful
          and stress-free celebration.
        </p>

        <div className="services-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>

              <h2>{service.title}</h2>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;

