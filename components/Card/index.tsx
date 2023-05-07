import React from "react";

// My Card Style
import style from "./card.module.scss";

const Dashboard_Card = ({ card_icon, title, live_data }: any) => {
  return (
    <>
      <div className={style.dashboard_card}>
        <div>
          {card_icon}
          <h3>{title}</h3>
        </div>
        <div className={style.dashboard_socket_details}>
          <h1>{`${live_data}.00`}</h1>
        </div>
      </div>
    </>
  );
};

export default Dashboard_Card;
