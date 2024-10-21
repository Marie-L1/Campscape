"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../constants";
import { link } from "fs";
import Button from "./Button";

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
          <div className="nav__login-btn">
            <Button 
              type="button"
              title="Login"
              icon="./user.svg"
              variant="btn_dark_green"
            />
          </div>

          <Image 
          src="/menu.svg" 
          alt="menu" 
          width={32} 
          height={32}
          className="nav__menu-img"/>
    </nav>
  )
}

export default NavBar