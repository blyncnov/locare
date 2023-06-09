import React from "react";

// Support Style
import style from "./support.module.scss";

const Support = () => {
  return (
    <div id="container">
      <div className={style.support_section}>
        <div className={style.support_container}>
          <div className={style.support_text_holder}>
            <h2>Try CareFinder today!</h2>
            <p>
              Why waste time scrolling through Google search results or asking
              for recommendations on social media? With CareFinder, you can find
              the best hospitals in your area with just a few clicks. Try
              CareFinder today and take control of your healthcare journey.
            </p>
          </div>
          <form action="POST" className={style.support_form}>
            <div className={style.grouped_data}>
              <input
                type="text"
                name="school"
                className={style.input}
                placeholder="First name"
              />
            </div>
            <div className={style.grouped_data}>
              <input
                type="text"
                name="school"
                className={style.input}
                placeholder="Message "
              />
            </div>
            <div className={style.support_button}>
              <button>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
