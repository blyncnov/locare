import React, { useEffect } from "react";
import superheroes from "superheroes";

// Global Modal Style
import style from "./modal.module.scss";

// React Icons
import { FaTimes } from "react-icons/fa";

// Redux
import { useDispatch } from "react-redux";
import { CLOSE } from "../../redux/actions/action";
import Link from "next/link";

// Icon style
const react_icon_style = {
  fontSize: "1.5em",
  marginTop: ".3em",
};

const NearByScan = () => {
  const dispatch = useDispatch();

  // Room Settings
  let username = superheroes.random();
  let areaSignature = "Harmony";

  // Close Modal Handler
  const CloseModalhandler = () => {
    dispatch({ type: CLOSE });
  };

  // Close Modal Handler
  const JoinRoomHandler = () => {
    dispatch({ type: "JOIN_ROOM" });

    // Close Modal
    dispatch({ type: CLOSE });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            console.log(result);
            console.log(result.state);
            //If granted then you can directly call your function here
          } else if (result.state === "prompt") {
            console.log(result);

            console.log(result.state);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  }, []);

  return (
    <div id={style.modal_full_background}>
      <div className={style.modal_container}>
        <div className={style.top_section}>
          <div>
            <h2>Scanning...</h2>
          </div>
          <span style={{ cursor: "pointer" }} onClick={CloseModalhandler}>
            <FaTimes style={react_icon_style} />
          </span>
        </div>
        <div className={style.content_section}>
          {["G", "J", "F"].map((data) => {
            return (
              <Link
                key={data}
                href={`/hospital/details?name=${areaSignature.toLowerCase()}&id=${username.toLowerCase()}`}
              >
                <div
                  className={style.discovered_room}
                  onClick={JoinRoomHandler}
                >
                  <h1> {data} </h1>
                </div>
              </Link>
            );
          })}
        </div>
        <div className={style.bottom_section}>
          <li>
            Scanning for the nearest hospitals in your area. <br />
          </li>
        </div>
      </div>
    </div>
  );
};

export default NearByScan;
