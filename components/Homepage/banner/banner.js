import React from 'react';
import Image from 'next/image';
import styles from './banner.module.css';
// import illustration from '@/assets/Illustration.png';
// import play from '@/assets/play.png';

function Banner() {
  return (
    <div className={styles.container}>
        <div className={styles.bannerText}>
        <p className={styles.para}><span className='bg-primary p-1 px-2 rounded-lg'>WELCOME TO:</span> BRILLIANT VIEW </p>
        <h1 className={styles.bannerTitle}>Your Trusted Partner for Solar Panel Installation and Innovation</h1>
        <h3 className={styles.bannerSubtitle}> Deep Dive into Harnessing Advanced Tools, Innovative Features, and Cutting-Edge Technologies for Optimal Performance and Efficiency in the Digital Age</h3>
        {/* <div className={styles.buttons}>
            <button className={styles.watch}><Image src={play} className={styles.play} alt="play" /> Watch Video</button>
            <button className={styles.getStarted}>Get Started</button>
        </div> */}
        </div>  
    </div>
  )
}

export default Banner;