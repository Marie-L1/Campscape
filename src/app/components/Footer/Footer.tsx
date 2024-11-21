"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FOOTER_LINKS } from "@/app/constants";
import "./Footer.scss";

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="footer-column">
      <h4 className="footer-column__title">{title}</h4>
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__items">
          <Link href="/" className="footer__logo">
            <Image
              src="/images/Campscape-logo.svg"
              alt="Campscape Logo"
              width={120}
              height={100}
              className="footer__logo-img"
            />
          </Link>

          <div className="footer__links">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn key={columns.title} title={columns.title}> {/* Add key here */}
                <ul className="footer__children-links">
                  {columns.links.map((link, index) => (
                    <Link
                      key={index}
                      href="/"
                      className="footer__link-item"
                    >
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </div>

          <Image
            src="/images/tress.svg"
            alt="trees"
            className="footer__trees"
            width={50}
            height={50}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
