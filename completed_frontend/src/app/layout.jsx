import "./globals.css";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";

export const metadata = {
  title: "Emina Cosmetics",
  description: "Find The Beauty in Everything",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <ScrollToTop />
        <footer id="contact">
            <div className="footer-content">
                <h3>Emina Cosmetics</h3>
                <p>Follow us on social media!</p>
                <ul className="socials">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Emina Cosmetics. All rights reserved.</p>
            </div>
        </footer>
      </body>
    </html>
  );
}