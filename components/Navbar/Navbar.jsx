"use client";
import "./Navbar.css";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../public/restaurant/gericht.png";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="app__navbar  ">
      <div className="app__logo">
        <Image src={Logo} alt="app logo" />
      </div>
      <div className="app__links">
        <Link
          href="/"
          className={`p__opensans ${pathname === "/" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          href="/aboutUs"
          className={`p__opensans ${pathname === "/aboutUs" ? "active" : ""}`}
        >
          About us
        </Link>
        <Link
          href="/menu"
          className={`p__opensans ${pathname === "/menu" ? "active" : ""}`}
        >
          Menu
        </Link>
        <Link
          href="/contact"
          className={`p__opensans ${pathname === "/contact" ? "active" : ""}`}
        >
          Contact
        </Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <div className="app__navbar-smallscreen-links">
              <Link
                onClick={() => setToggleMenu(false)}
                href="/"
                className="p__opensans"
              >
                Home
              </Link>
              <Link
                onClick={() => setToggleMenu(false)}
                href="/aboutUs"
                className="p__opensans"
              >
                About
              </Link>
              <Link
                onClick={() => setToggleMenu(false)}
                href="/menu"
                className="p__opensans"
              >
                Menu
              </Link>
              <Link
                onClick={() => setToggleMenu(false)}
                href="/contact"
                className="p__opensans"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
