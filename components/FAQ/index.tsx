import React, { useState } from "react";

// React Icons
import { IoChevronDown } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";

// FAQ data
import { FAQQuestionAndAnswer } from "../../data/FAQ";

// Naviagtion Style
import style from "./Faq.module.scss";

// Icon Style
const Iconstyle = {
  fontSize: "1.5em",
  cursor: "pointer",
};

const FAQTab = ({ data }: any) => {
  const [isClicked, setIsClicked] = useState(true);

  const HandleToggler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div onClick={HandleToggler}>
      <div className={style.faq_section}>
        <div className={style.faq_title_section}>
          <div className={style.faq_title}>
            <li>{data.question} </li>
          </div>
          <div className={style.faq_toggle_option} onClick={HandleToggler}>
            {!isClicked ? (
              <IoChevronDown style={Iconstyle} />
            ) : (
              <MdArrowForwardIos style={Iconstyle} />
            )}
          </div>
        </div>
        <div
          className={
            !isClicked
              ? style.show_tab
              : `${style.show_tab}  ${style.hide_tab} `
          }
        >
          <p className={style.tab_answer}>{data.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <div id="container">
        <div className={style.faq_container}>
          <div className={style.faq_top_container}>
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className={style.faq_tabs}>
            {FAQQuestionAndAnswer.map((faq) => {
              return <FAQTab key={faq.id} data={faq} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
