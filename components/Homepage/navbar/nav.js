"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import styles from "./nav.module.css";
import { IoSettingsOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.mainContainer}>
      {/* Mobile Nav */}

      <div className={styles.mobileNav}>
      <Image src={logo} alt="logo" width={40} />
        {isOpen && (
          <div className="flex flex-col w-full items-start h-[100vh] absolute left-0 right-0 top-0 bg-[#B3AFAF] text-black px-6 py-4">
            {isOpen && (
              <IoMdClose
                className="w-8 h-8 absolute top-6 right-6"
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
            <Link href="/" className={styles.logo}>
          <Image src={logo} alt="logo" width={40} />
        </Link>
            <ul className={styles.mobileNavList}>
              <li className={styles.mobileNavItems}>Home</li>
              <li className={styles.mobileNavItems}>About</li>
              <li className={styles.mobileNavItems}>Services</li>
              <li className={styles.mobileNavItems}>Gallery</li>
            </ul>
            <div className={styles.mobileButtons}>
              <button className={styles.login}>OUR E-SHOP</button>
              <button className={styles.register}>CONTACT US </button>
              <IoSettingsOutline className={styles.settingsIcon} />
            </div>
          </div>
        )}

        {!isOpen && (
          <CiMenuFries className="w-8 h-8 text-white" onClick={() => setIsOpen(!isOpen)} />
        )}
      </div>

      {/* //Desktop Nav */}
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" width={40} />
        </div>
        <ul className={styles.navList}>
          <li className={styles.navItems}>Home</li>
          <li className={styles.navItems}>About</li>
          <li className={styles.navItems}>Services</li>
          <li className={styles.navItems}>Gallery</li>
        </ul>
      </div>
      <div className={styles.buttons}>
        <button className={styles.login}>OUR E-SHOP</button>
        <button className={styles.register}>CONTACT US</button>
      </div>
    </nav>
  );
}

export default Navbar;
