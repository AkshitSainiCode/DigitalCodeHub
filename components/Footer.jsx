import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand">
            <Image
              src="/logo-icon.png"
              alt="Digital CodeHub logo"
              width={48}
              height={48}
              className="brand-mark"
            />
            <span className="brand-text">
              Digital <strong>CodeHub</strong>
            </span>
          </div>
          <p className="muted-light">
            Learn | Build | Grow
            <br />
            We Build Digital. We Power Business.
          </p>
        </div>
        <div>
          <h4>Services</h4>
          {services.slice(0, 6).map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>
              {s.title}
            </Link>
          ))}
        </div>
        <div>
          <h4>Company</h4>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/blog">Blog</Link>
        </div>
        {/* <div>
          <h4>Contact</h4>
          <span>hello@digitalcodehub.com</span>
          <span>+91 98765 43210</span>
          <span>Delhi, India</span>
        </div> */}
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} Digital CodeHub Technologies. All rights
        reserved.
      </div>
    </footer>
  );
}
