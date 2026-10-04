import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

export const metadata = {
  title: { default: "Digital CodeHub — Website, App & Software Development Company", template: "%s | Digital CodeHub" },
  description: "Digital CodeHub Technologies is an IT company for web development, mobile apps, UI/UX, software, e-commerce, AI and digital marketing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsApp />
      </body>
    </html>
  );
}
