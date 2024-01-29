import React from "react";
import Image from "next/image";
import styles from "./banner.module.css";
import { motion } from "framer-motion";

const bannerVariants = {
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
};

function Banner({ welcome, span, title, subtitle }) {
  console.log(welcome);
  return (
    <div className={styles.container}>
      <div className={styles.bannerText}>
        <motion.p
          className={styles.para}
          variants={bannerVariants}
          initial="hidden"
          animate="visible"
        >
          {welcome}
          <span className="bg-primary p-2 px-4 rounded-md ml-4 font-exo">
            {span}
          </span>{" "}
        </motion.p>
        <motion.h1
          className={styles.bannerTitle}
          variants={bannerVariants}
          initial="hidden"
          animate="visible"
        >
          {title}
        </motion.h1>
        <motion.div
          className={styles.buttons}
          variants={bannerVariants}
          initial="hidden"
          animate="visible"
        >
          <button className={styles.getStarted}>Learn More</button>
        </motion.div>
      </div>
    </div>
  );
}

export default Banner;
