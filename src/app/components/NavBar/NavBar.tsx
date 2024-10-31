"use client";
import "./NavBar.scss";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../../constants";
import { link } from "fs";
import Button from "../Button/Button";

const NavBar = () => {
  return (
    <nav className="nav">
        <Link href="/" className="nav__logo-link">
            <Image className="nav__logo" src="/images/Campscape-logo.jpg" alt="Campscape Logo" width={150} height={130}/>
        </Link>
          <ul className="nav__list">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="nav__links">{link.label}</Link>
            ))}
          </ul>
    </nav>
  )
}

export default NavBar