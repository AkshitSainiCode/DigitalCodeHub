"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        <Link href="/" className="brand" onClick={closeMenu}>
          <Image src="/logo-full.png" alt="Digital CodeHub — Learn, Build, Grow" width={900} height={270} priority className="brand-logo" />
        </Link>

        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-menu ${menuOpen ? "show" : ""}`}>
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link href="/services" onClick={closeMenu}>Services</Link>
          <Link href="/projects" onClick={closeMenu}>Projects</Link>
          <Link href="/technologies" onClick={closeMenu}>Technologies</Link>
          <Link href="/blog" onClick={closeMenu}>Blog</Link>
          <Link href="/careers" onClick={closeMenu}>Careers</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
          <Link href="/quote" className="nav-cta" onClick={closeMenu}>Get a Free Quote</Link>
        </nav>
      </div>
    </header>
  );
}
