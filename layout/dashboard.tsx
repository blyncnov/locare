import React from "react";
import Head from "next/head";

// Font Management
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// Dashboard layout Components
import Sidebar from "@/components/Dashboard/Sidebar";
import Topbar from "@/components/Dashboard/Topbar";

const DashboardLayout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Foy Platform - Create Giveway like pro!!!</title>
        <meta
          name="Bright Technologies - User Control Panel"
          content="Bright Technologies - User Control Panel"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={inter.className}>
        <div className="dashboard_grid_layout">
          <div className="dashboard_grid_column">
            <Sidebar />
          </div>

          <div className="dashboard_main">
            <div className="dashboard_grid_column">
              <Topbar />
              <div className="main_content">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
