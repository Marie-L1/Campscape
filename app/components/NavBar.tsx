"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../constants";
import { link } from "fs";

const NavBar = () => {
  return (
    <nav className="nav">
        <Link href="/">
            <Image src="/hilink-logo.svg" alt="Hilink Logo" width={74} height={29}/>
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