import React from "react";

// React Icon
import { FaBars, FaUserTie } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";

// Redux
import { useDispatch } from "react-redux";
import { TOGGLE_SIDEBAR } from "../../redux/actions/action";

// Icon Style
const Iconstyle = {
  fontSize: "1.8em",
  cursor: "pointer",
  color: "#344373",
};

const Topbar = () => {
  const dispatch = useDispatch();

  const Clickhandler = () => {
    // Do Action
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  return (
    <>
      <div className="dashboard_topBar">
        <div className="dashboard_topBar_flex">
          <div className="dashboard_topBar_title" onClick={Clickhandler}>
            <div className="hambuger_icon">
              <FaBars style={Iconstyle} />
            </div>
          </div>
          <div className="dashboard_topBar_left">
            <div className="dashboard_topbar_user_info">
              <div className="dashboard_notification">
                <IoNotificationsSharp style={Iconstyle} />
                <div className="dashboard_notification_counter">5</div>
              </div>
              {/* <div className="dashboard_user_photo">
                <FaUserTie />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
