"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo.png";
import styles from "./nav.module.css";
import { IoSettingsOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaShopify } from "react-icons/fa6";
import { IoMdContacts } from "react-icons/io";
import { motion } from "framer-motion";

const navVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
  moMenuOpen: {
    opacity: 1,
    y: 100,
    transition: {
      duration: 5000,
      ease: "easeIn",
    },
  },
  moMenuClosed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
  hover: {
    scale: 1.2,
    transition: {
      yoyo: 10,
    },
  },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.mainContainer}>
      {/* Mobile Nav */}

      <div className={styles.mobileNav}>
        <Image src={logo} alt="logo" width={40} />
        {isOpen && (
          <div className="flex flex-col w-full items-start h-[100%] absolute left-0 right-0 top-0 bg-[#B3AFAF] text-black px-6 py-4">
            {isOpen && (
              <IoMdClose
                className="w-8 h-8 absolute top-6 right-6"
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
            <Link href="/" className={styles.logo}>
              {/* <Image src={logo} alt="logo" width={40} /> */}
            </Link>
            <motion.ul className={styles.mobileNavList} variants={navVariants} initial="hidden" animate="visible">
              <li className={styles.mobileNavItems}>Home</li>
              <li className={styles.mobileNavItems}>About</li>
              <li className={styles.mobileNavItems}>Services</li>
              <li className={styles.mobileNavItems}>Gallery</li>
            </motion.ul>
            <motion.div className={styles.mobileButtons} variants={navVariants} initial="hidden" animate="visible">
              <button className={styles.login}>
                OUR E-SHOP <FaShopify className="w-[24px] h-[24px]" />
              </button>
              <button className={styles.register}>
                CONTACT US <IoMdContacts className="w-[24px] h-[24px]" />
              </button>
            </motion.div>
          </div>
        )}

        {!isOpen && (
          <CiMenuFries
            className="w-8 h-8 text-white"
            variants={navVariants}
            initial="moMenuClosed"
            animate={isOpen ? "moMenuOpen" : "moMenuClosed"}
            onClick={() => { setIsOpen(!isOpen)}}
          />
        )}
      </div>

      {/* //Desktop Nav */}
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" width={40} />
        </div>
        <ul className={styles.navList}>
          <motion.li className={styles.navItems} whileHover={{scale:1.2}}>Home</motion.li>
          <motion.li className={styles.navItems} whileHover={{scale:1.2}}>About</motion.li>
          <motion.li className={styles.navItems} whileHover={{scale:1.2}}>Services</motion.li>
          <motion.li className={styles.navItems} whileHover={{scale:1.2}}>Gallery</motion.li>
        </ul>
      </div>
      <div className={styles.buttons}>
        <motion.button className={styles.login} variants={navVariants} whileHover="hover">
          OUR E-SHOP <FaShopify className="w-[32px] h-[32px]" />
        </motion.button>
        <motion.button className={styles.register} variants={navVariants} whileHover="hover">
          CONTACT US <IoMdContacts className="w-[24px] h-[24px]" />
        </motion.button>
      </div>
    </nav>   
  );
}

export default Navbar;
