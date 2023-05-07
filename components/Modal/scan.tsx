import React from "react";
import Image from "next/image";

import ScanImage from "../../public/profile.jpeg";

// Modal Style
import style from "./modal.module.scss";

// Redux
import { useDispatch } from "react-redux";
import { SHOW_SCAN_MODAL } from "@/redux/actions/action";

const Scan = () => {
  const dispatch = useDispatch();

  // Close Modal Handler
  const CloseScanResultHandler = (e: any) => {
    e.stopPropagation();
    dispatch({ type: SHOW_SCAN_MODAL });
  };

  return (
    <>
      <div className={style.modal} onClick={CloseScanResultHandler}>
        <div className={style.modal_container}>
          <div className={`${style.modal_top_row} ${style.modal_scan_top}`}>
            <h2>Information About Attendee</h2>
          </div>
          <br />
          <div className={style.modal_scan_info}>
            <div>
              <div className={style.modal_scan_image_container}>
                <div className={style.modal_scan_image}>
                  <Image src={ScanImage} alt="scan_image" priority={true} />
                </div>
              </div>
            </div>
            <div>
              <p>
                Name: <span>Taiwo Boluwatife</span>
              </p>
              <p>
                Gender: <span>Male</span>
              </p>
              <p>
                Relationship: <span>Groom Assassin</span>
              </p>
              <p>
                Address: <span>No 5, Sallyman, FUNAAB</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scan;
