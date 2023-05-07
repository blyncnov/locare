import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

// CSS STYLES
import "@/styles/globals.css";
import "@/styles/base.scss";
import "@/styles/layout.scss";

// Auth
import "@/styles/auth/auth.scss";

// SCSS Dashboard Layouts
import "@/styles/dashboard/index.scss";

// SCSS Animation
import "@/styles/animation.scss";

// Redux
import { Provider } from "react-redux";
import store from "../redux/store";

// Bright-Technologies Dashboard Layout
import DashboardLayout from "@/layout/dashboard";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: any) => page);

  if (Component.getLayout) {
    return (
      <Provider store={store}>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </Provider>
    );
  }

  return getLayout(<Component {...pageProps} />);
}
