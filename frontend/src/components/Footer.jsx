

function Footer() {
  return (
    <footer style={{
      backgroundColor: "var(--color-bg-light)",
      color: "var(--color-text-dark)",
      padding: "40px 20px",
      textAlign: "center",
      borderTop: "1px solid var(--color-border)",
      marginTop: "auto"
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "15px" }}>
        <h3 style={{ fontFamily: "var(--font-heading)", margin: 0, fontSize: "2rem" }}>About Velora</h3>
        <p style={{ fontSize: "1.05rem", lineHeight: "1.6", color: "var(--color-text-muted)" }}>
          Velora is a boutique shoe brand inspired by elegance and craftsmanship.
          Each pair is meticulously designed to bring out confidence and timeless beauty in your everyday walk.
          Experience the harmony of comfort and high fashion.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
          <a href="https://www.instagram.com/velora.step?igsh=emYwdGNjcTIyOTk2" style={{ fontWeight: "500", transition: "color var(--transition-fast)" }} onMouseOver={(e) => e.currentTarget.style.color = "var(--color-accent)"} onMouseOut={(e) => e.currentTarget.style.color = "inherit"}>Instagram</a>
          <a href="https://www.facebook.com/share/17rD6vjqxE/" style={{ fontWeight: "500", transition: "color var(--transition-fast)" }} onMouseOver={(e) => e.currentTarget.style.color = "var(--color-accent)"} onMouseOut={(e) => e.currentTarget.style.color = "inherit"}>Facebook</a>
          <a href="mailto:info@velora.com" style={{ fontWeight: "500", transition: "color var(--transition-fast)" }} onMouseOver={(e) => e.currentTarget.style.color = "var(--color-accent)"} onMouseOut={(e) => e.currentTarget.style.color = "inherit"}>Contact</a>
        </div>

        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginTop: "20px" }}>
          &copy; 2026 Velora Shoes. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

