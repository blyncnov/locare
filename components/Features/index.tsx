import React from "react";
import Image from "next/image";
import Link from "next/link";

// Features Style
import style from "./features.module.scss";

// React Icons
import { BsFillAwardFill } from "react-icons/bs";

// Data
import { OurPackage } from "../../data/Features";

// Image
import Doc1 from "../../public/care/doc.jpeg";
import Doc2 from "../../public/care/doc2.jpeg";

// Icon Style
const Icon_style = {
  fontSize: "30px",
};

const Features = () => {
  return (
    <div id="container">
      <div className={style.feature_section}>
        <div className={style.feature_grid_section}>
          <div className={style.feature_grid_container}>
            <div className={style.feature_column}>
              <div className={style.feature_display}>
                <div className={style.part_one}>
                  <Image priority={true} src={Doc1} alt="mentorship" />
                </div>
                <div className={style.part_one}>
                  <Image priority={true} src={Doc2} alt="mentorship" />
                </div>
              </div>
            </div>

            <div className={style.feature_column}>
              <div className={style.feature_description}>
                <>
                  <h1>
                    Welcome to <span>CareFinder</span>{" "}
                  </h1>
                  <p>
                    Carefinder is a platform where users can search for
                    hosiptals in their areas, export hospital details for your
                    records and enhance your healthcare experience by connecting
                    with others and sharing valuable resources.
                  </p>

                  <Link href="/services">
                    <button className={style.btn} id={style.primary}>
                      Our Services
                    </button>
                  </Link>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
