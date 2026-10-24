"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-brand">
        <Image src="/logoflower.svg" alt="Logo Toko Bunga" width="35" height="35"/>
        Toko Bunga Cerah
      </Link>
      
      <div className="nav-links">
        <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
        <Link href="/about" className={pathname === "/about" ? "active" : ""}>About</Link>
        <Link href="/team" className={pathname.startsWith("/team") ? "active" : ""}>Team</Link>
        <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
      </div>
    </nav>
  );
}