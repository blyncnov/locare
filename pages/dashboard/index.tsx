import React from "react";

// React Icon
import { CiTimer } from "react-icons/ci";
import { CgTimelapse } from "react-icons/cg";
import { FaBalanceScaleLeft } from "react-icons/fa";

// Icon Style
const IconCardStyle = {
  color: "black",
  fontSize: "1.5em",
};

export default function Dashboard() {
  return (
    <>
      <header className="dashboard_header">
        <h1>My Dashboard</h1>
        <p>Realtime Insight on giveaway sessions.</p>
      </header>
      <section className="dashboard_overview_section">
        <section className="dashboard_overview_cards">
          <div className="dashboard_card">
            <div>
              <FaBalanceScaleLeft style={IconCardStyle} />
              <h3>Data Balance</h3>
            </div>
            <div className="dashboard_socket_details">
              <h1>30.2GB</h1>
            </div>
          </div>
          <div className="dashboard_card">
            <div>
              <CiTimer style={IconCardStyle} />
              <h3>Account status</h3>
            </div>
            <div className="dashboard_socket_details">
              <h1 className={true ? "active_plan" : "expired_plan"}>
                {true ? "Active" : "Expired"}
              </h1>
            </div>
          </div>
          <div className="dashboard_card">
            <div>
              <CgTimelapse style={IconCardStyle} />
              <h3>Time Left</h3>
            </div>
            <div className="dashboard_socket_details">
              <h1> {false ? "Unlimited" : "29days"}</h1>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

Dashboard.getLayout = function getLayout(page: any) {
  return page;
};
