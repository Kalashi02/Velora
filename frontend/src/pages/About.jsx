// src/pages/About.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="fade-in">
      {/* Hero Section */}
      <section style={{ padding: "80px 20px", textAlign: "center", backgroundColor: "#f9f6f5" }}>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "300", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "20px" }}>The Velora Story</h1>
        <p style={{ fontSize: "1.1rem", color: "#666", maxWidth: "600px", margin: "0 auto", lineHeight: "1.8" }}>
          Crafting confidence and timeless elegance with every step.
        </p>
      </section>

      {/* The Founders */}
      <section style={{ padding: "80px 20px", maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "50px", alignItems: "center" }}>
        <div>
          <img src="https://images.pexels.com/photos/3755021/pexels-photo-3755021.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Founders" style={{ width: "100%", borderRadius: "8px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }} />
        </div>
        <div>
          <h2 style={{ fontSize: "2rem", fontWeight: "300", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>The Founders</h2>
          <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: "1.8", marginBottom: "20px" }}>
            Velora was born out of a shared vision between two artisans who believed that true luxury shouldn't compromise on comfort. Frustrated by an industry that prioritized aesthetic over wearability, they set out to break the mold.
          </p>
          <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: "1.8" }}>
            Today, our boutique brand continues to uphold the very principles it was founded on: an unyielding dedication to quality, structural integrity, and exquisite design without compromise.
          </p>
        </div>
      </section>

      {/* The Design Process */}
      <section style={{ padding: "80px 20px", backgroundColor: "#fff", borderTop: "1px solid #eaeaea", borderBottom: "1px solid #eaeaea" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "50px", alignItems: "center" }}>
          <div style={{ order: 1 }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "300", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>The Design Process</h2>
            <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: "1.8", marginBottom: "20px" }}>
              Every Velora shoe begins as a hand-drawn sketch in our studio. Our designers draw inspiration from architecture, modern art, and the natural elegance of the human form to create pieces that demand attention.
            </p>
            <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: "1.8" }}>
              We prototype extensively. A single heel might undergo two dozen revisions before we find the perfect balance point, ensuring that beauty translates effortlessly into all-day walkability for our clients.
            </p>
          </div>
          <div style={{ order: 2 }}>
            <img src="https://images.pexels.com/photos/1410403/pexels-photo-1410403.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Design Process sketches" style={{ width: "100%", borderRadius: "8px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }} />
          </div>
        </div>
      </section>

      {/* Materials & Factory */}
      <section style={{ padding: "80px 20px", maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "300", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "30px" }}>Materials & Artistry</h2>
        <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: "1.8", maxWidth: "700px", margin: "0 auto 50px" }}>
          We source only the finest, ethically produced materials. From butter-soft authentic leathers to high-tension resilient strapping, every component is rigorously tested. Our master cobblers assemble each pair with techniques passed down through generations, ensuring your Veloras last a lifetime.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
           <img src="https://images.pexels.com/photos/2562992/pexels-photo-2562992.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Leather material" style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }} />
           <img src="https://images.pexels.com/photos/331742/pexels-photo-331742.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shoemaking tools" style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }} />
           <img src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" alt="Finished shoe" style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }} />
        </div>
      </section>
      
      {/* CTA */}
      <section style={{ padding: "80px 20px", backgroundColor: "#111", color: "#fff", textAlign: "center" }}>
        <h3 style={{ fontSize: "1.8rem", fontWeight: "300", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "30px" }}>Experience the Difference</h3>
        <Link to="/shop" className="btn-primary" style={{ padding: "15px 40px", backgroundColor: "#fff", color: "#111", textDecoration: "none", fontSize: "1rem", letterSpacing: "2px", textTransform: "uppercase", border: "none" }}>
          Shop Our Collection
        </Link>
      </section>

    </main>
  );
}

export default About;
