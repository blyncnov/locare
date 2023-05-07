import React from "react";
import Link from "next/link";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { CLOSE } from "../../redux/actions/action";

// React Icon
import { FaExchangeAlt } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import { MdSpaceDashboard, MdHistory } from "react-icons/md";
import { RiListSettingsFill, RiExchangeDollarFill } from "react-icons/ri";
import { GiTrafficLightsReadyToGo } from "react-icons/gi";
import { AiOutlinePoweroff } from "react-icons/ai";
import { VscReferences } from "react-icons/vsc";
import { HiViewfinderCircle } from "react-icons/hi2";

// Icon Style
const Iconstyle = {
  fontSize: "1.5em",
  color: "#ffffff",
};

const Sidebar = () => {
  const dispatch = useDispatch();

  const CloseSidebar = () => {
    // Do This Action
    dispatch({ type: CLOSE });
  };

  const LogOutHandler = () => {
    console.log("I want to log out");

    // Do This Action
    dispatch({ type: CLOSE });
  };

  // Toggle State
  const ToggleState = useSelector(
    (state: any) => state.ModeReducer.isSideBarOpen
  );

  return (
    <>
      <div
        className={
          ToggleState ? "dashboard_sideBar" : "dashboard_sideBar active"
        }
      >
        <div className="dashboard_sidebar_height">
          <div className="dashboard_logo">
            <Link href="/dashboard" onClick={CloseSidebar}>
              <h2>
                <HiViewfinderCircle />
                <span>LOCARE</span>
              </h2>
            </Link>
          </div>
        </div>

        <div className="dashboard_sidebar_navigation ">
          <ul>
            <Link href="/" onClick={CloseSidebar}>
              <div className="dashboard_flex_item" id="dashboard_active_home">
                <MdSpaceDashboard style={Iconstyle} />
                <li>Dashboard </li>
              </div>
            </Link>

            <div className="sidebar_quicklinks_summary">
              <li>Navigate Pages</li>
            </div>

            <Link href="/traffic_usage" onClick={CloseSidebar}>
              <div className="dashboard_flex_item">
                <GiTrafficLightsReadyToGo style={Iconstyle} />
                <li>Task Mode</li>
              </div>
            </Link>

            <Link href="/fund_wallet" onClick={CloseSidebar}>
              <div className="dashboard_flex_item">
                <RiExchangeDollarFill style={Iconstyle} />
                <li>Instant Mode</li>
              </div>
            </Link>

            <Link href="/invoices" onClick={CloseSidebar}>
              <div className="dashboard_flex_item">
                <MdHistory style={Iconstyle} />
                <li>Brand & Growth</li>
              </div>
            </Link>

            <Link href="/purchase_plans" onClick={CloseSidebar}>
              <div className="dashboard_flex_item">
                <FaExchangeAlt style={Iconstyle} />
                <li>Data & Reviews</li>
              </div>
            </Link>

            <Link href="/subscription_plans" onClick={CloseSidebar}>
              <div className="dashboard_flex_item">
                <BiTargetLock style={Iconstyle} />
                <li>Generate Lead</li>
              </div>
            </Link>

            <div className="sidebar_quicklinks_summary">
              <li>User Settings</li>
            </div>

            <Link href="/settings" onClick={CloseSidebar}>
              <div className="dashboard_flex_item">
                <RiListSettingsFill style={Iconstyle} />
                <li>My Profile</li>
              </div>
            </Link>

            <Link href="/settings" onClick={CloseSidebar}>
              <div className="dashboard_flex_item">
                <VscReferences style={Iconstyle} />
                <li>My Referrals</li>
              </div>
            </Link>

            <div className="sidebar_quicklinks_summary">
              <li>Others</li>
            </div>

            <div
              className="dashboard_sidebar_bottom_height"
              onClick={LogOutHandler}
            >
              <div className="dashboard_link_logout">
                <AiOutlinePoweroff style={Iconstyle} />
                <button>Log out</button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
