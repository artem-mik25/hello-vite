// src/components/Footer/Footer.jsx
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__text">© {year} WTWR, powered by React</p>
    </footer>
  );
}
