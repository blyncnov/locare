import React from "react";

// Features Style
import style from "./features.module.scss";

// React Icons
import { BsFillAwardFill } from "react-icons/bs";

// Data
import { OurPackage } from "../../data/Features";
import Image from "next/image";

// Image
import MentorshipImage from "../../public/mentor-2.webp";

// Icon Style
const Icon_style = {
  fontSize: "30px",
};

const Features = () => {
  return (
    <div id="container">
      <div className={style.feature_section}>
        <div className={style.feature_header}>
          <h1>Services We Offers:</h1>
          <p>Unlock the Full Potential of Your Business with Our Services.</p>
        </div>
        <div className={style.feature_grid_section}>
          <div className={style.feature_grid_container}>
            <div className={style.feature_column}>
              <div className={style.feature_options}>
                {OurPackage.map((data) => {
                  return <FeatureAccordion key={data.id} data={data} />;
                })}
              </div>
            </div>
            <div className={style.feature_column}>
              <div className={style.feature_display}>
                <Image priority={true} src={MentorshipImage} alt="mentorship" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureAccordion = (props: any) => {
  return (
    <>
      <div className={style.feature_opt}>
        <BsFillAwardFill style={Icon_style} />
        <div className={style.feature_opt_content}>
          <p> {props.data.package} </p>
          <div className={style.feature_dropdown_content}>
            <p>{props.data.description} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
