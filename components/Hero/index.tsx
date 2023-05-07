import React from "react";
import Link from "next/link";

// Naviagtion Style
import style from "./Hero.module.scss";

const Hero = () => {
  return (
    <>
      <div id="container">
        <div className={style.hero_container}>
          <div className={style.hero_section_cto}>
            <div className={style.hero_text}>
              <div className={style.cto_text}>
                <h1>Find the Nearest Hospitals with Locare.</h1>
              </div>
              <div className={style.cto_desc}>
                <p>
                  Locare is your go-to tool for finding the nearest hospitals in
                  your area. Whether you&apos;re looking for emergency care or
                  just need to schedule a routine check-up, Locare has got you
                  covered. Simply enter your location and let us do the rest.
                </p>
              </div>
              <div className={style.cto_action}>
                <Link href="/auth/login">
                  <button data-btn="transparent">Get Started</button>
                </Link>
                <Link href="/dashboard">
                  <button data-btn="primary">Book a demo</button>
                </Link>
              </div>
            </div>
            <div className={style.hero_image_illustration}>
              {/* <Image src={SvgImage} alt="lottie" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
