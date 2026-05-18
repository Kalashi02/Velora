// src/pages/Contact.jsx
function Contact() {
  return (
    <main className="fade-in" style={{ padding: "60px 20px", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Get in Touch</h1>
      <p style={{ fontSize: "1.1rem", color: "var(--color-text-muted)", marginBottom: "40px" }}>
        We’d love to hear from you. Reach out for inquiries, collaborations, or customer support.
      </p>

      {/* Contact form */}
      <form
        className="glass-panel"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "40px",
          borderRadius: "15px",
          textAlign: "left"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label style={{ fontWeight: "500", color: "var(--color-text-dark)" }}>Name</label>
          <input
            type="text"
            placeholder="Jane Doe"
            style={{ 
              padding: "15px", 
              borderRadius: "8px", 
              border: "1px solid var(--color-border)", 
              backgroundColor: "var(--color-primary)",
              fontFamily: "var(--font-body)",
              fontSize: "1rem"
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label style={{ fontWeight: "500", color: "var(--color-text-dark)" }}>Email</label>
          <input
            type="email"
            placeholder="jane@example.com"
            style={{ 
              padding: "15px", 
              borderRadius: "8px", 
              border: "1px solid var(--color-border)", 
              backgroundColor: "var(--color-primary)",
              fontFamily: "var(--font-body)",
              fontSize: "1rem"
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label style={{ fontWeight: "500", color: "var(--color-text-dark)" }}>Message</label>
          <textarea
            placeholder="How can we help you?"
            rows="5"
            style={{ 
              padding: "15px", 
              borderRadius: "8px", 
              border: "1px solid var(--color-border)", 
              backgroundColor: "var(--color-primary)",
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              resize: "vertical"
            }}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn-primary"
          style={{ width: "100%", marginTop: "10px", padding: "15px" }}
        >
          Send Message
        </button>
      </form>

      {/* Additional Contact info */}
      <div style={{ marginTop: "50px", display: "flex", gap: "30px", justifyContent: "center" }}>
        <p style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <span style={{ fontWeight: "600", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "1px" }}>Email</span>
          <a href="mailto:info@velora.com" style={{ color: "var(--color-accent)", fontWeight: "500" }}>
            info@velora.com
          </a>
        </p>
        <p style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <span style={{ fontWeight: "600", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "1px" }}>Instagram</span>
          <a href="https://instagram.com/velora" style={{ color: "var(--color-accent)", fontWeight: "500" }}>
            @velora
          </a>
        </p>
      </div>
    </main>
  );
}

export default Contact;
