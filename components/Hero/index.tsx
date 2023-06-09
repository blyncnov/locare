import React from "react";

// Naviagtion Style
import style from "./Hero.module.scss";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

// Components
import NearByScan from "../Modal/scanarea";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { SHOW_MODAL } from "../../redux/actions/action";
import Link from "next/link";

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
                <h1>
                  Find the nearest hospital to you and make an appointment.
                </h1>
              </div>
              <div className={style.cto_desc}>
                <p>
                  Discover Your Perfect Care: Find Your Hospital, Anytime,
                  Anywhere! Whether you&apos;re looking for emergency care or
                  just need to schedule a routine check-up.
                </p>
              </div>
              <div className={style.cto_action}>
                <>
                  {/* {* FORM - SERACH FOR HOSPITAL*} */}
                  <form method="GET">
                    <div className={style.join_waitlist}>
                      <input
                        type="text"
                        placeholder="Federal Medical Center, Ebutte Metta, Lagos State ..."
                        name="hospital"
                        onChange={(e) => e.target.value}
                        required
                      />
                      <button type="submit">Search</button>
                    </div>
                    <Link href="/">
                      <li>
                        Learn more about CareFinder{" "}
                        <HiOutlineArrowNarrowRight
                          style={{ fontSize: "2em" }}
                        />
                      </li>
                    </Link>
                  </form>
                  {/* {* FORM - ENDS*} */}
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
