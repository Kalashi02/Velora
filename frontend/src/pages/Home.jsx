// src/pages/Home.jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="fade-in">
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "80vh",
          backgroundImage: "linear-gradient(135deg, rgba(249, 244, 239, 0.9), rgba(234, 219, 211, 0.8), rgba(183, 110, 121, 0.3)), url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="glass-panel"
          style={{
            padding: "40px",
            borderRadius: "15px",
            maxWidth: "600px",
            width: "90%",
            textAlign: "center"
          }}
        >
          <img
            src="/images/velora-logo.png"
            alt="Velora Logo"
            style={{ width: "180px", height: "auto", marginBottom: "20px" }}
          />
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-1px" }}>
            Walk in Elegance
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: "var(--color-text-muted)", marginBottom: "30px", lineHeight: "1.6" }}>
            Discover handcrafted shoes designed for timeless style. Give yourself the confidence and beauty your walk deserves.
          </p>
          <Link to="/shop" className="btn-primary" style={{ padding: "14px 30px", fontSize: "1.1rem" }}>
            Shop Collection
          </Link>
        </div>
      </section>


    </main>
  );
}

export default Home;
