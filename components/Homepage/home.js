"use client"
import { useRef, useEffect } from "react";
import Nav from "@/components/Homepage/navbar/nav";
import Banner from "./banner/banner";
import Image from "next/image";
import { bannerTextObj } from "@/constants";
import Swiper from 'swiper/bundle';
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

function Home() {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Initialize Swiper when the component mounts
    swiperRef.current = new Swiper(".swiper-container", {
      // Swiper options here
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 9000,
        disableOnInteraction: false,
      },
    });

    // Destroy Swiper instance when the component unmounts
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <Nav />
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {bannerTextObj.map((banner, index) => (
            <div key={index} className="swiper-slide">
              <Image
                src={banner.image}
                alt="background"
                className="w-full h-[450px] xl:h-[650px]"
              />
              <div className="absolute top-20 lg:top-16 xl:px-24">
                <Banner
                  welcome={banner.welcome}
                  span={banner.span}
                  title={banner.title}
                  subtitle={banner.subtitle}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
