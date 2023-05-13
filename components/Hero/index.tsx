import React from "react";
import Link from "next/link";

// Naviagtion Style
import style from "./Hero.module.scss";

// Components
import NearByScan from "../Modal/scanarea";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { SHOW_MODAL } from "../../redux/actions/action";

const Hero = () => {
  const dispatch = useDispatch();

  // My Scanning Modal State From Redux State
  const ScanModal = useSelector((state: any) => state.ModeReducer.isModalOpen);

  // Open Modal Handler
  const ShowModalHandler = () => {
    console.log("Open Modal");
    dispatch({ type: SHOW_MODAL });
  };

  return (
    <>
      {ScanModal && <NearByScan />}
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
                <div onClick={ShowModalHandler}>
                  <button data-btn="primary">Quick Discovery </button>
                </div>
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
