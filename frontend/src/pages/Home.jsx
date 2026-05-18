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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
          boxSizing: "border-box",
          overflow: "hidden"
        }}
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0
          }}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-woman-walking-in-red-high-heels-42661-large.mp4" type="video/mp4" />
        </video>

        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1 }}></div>

        <div className="glass-panel"
          style={{
            padding: "50px",
            borderRadius: "15px",
            maxWidth: "600px",
            width: "90%",
            textAlign: "center",
            zIndex: 2,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "#ffffff"
          }}
        >
          <h1 style={{ color: "#ffffff", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "1px", textShadow: "0 4px 15px rgba(0,0,0,0.8)" }}>
            Walk in Elegance
          </h1>
          <p style={{ color: "#f8f8f8", fontSize: "clamp(1rem, 2.5vw, 1.25rem)", marginBottom: "35px", lineHeight: "1.6", textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>
            Discover handcrafted shoes designed for timeless style. Give yourself the confidence and beauty your walk deserves.
          </p>
          <Link to="/shop" style={{ display: "inline-block", padding: "16px 35px", fontSize: "1.1rem", backgroundColor: "#fff", color: "#111", border: "none", borderRadius: "40px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600", transition: "all 0.3s" }} onMouseOver={e => e.currentTarget.style.backgroundColor = "#ddd"} onMouseOut={e => e.currentTarget.style.backgroundColor = "#fff"}>
            Shop Collection
          </Link>
        </div>
      </section>


    </main>
  );
}

export default Home;
