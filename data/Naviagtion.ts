// Navigation Types
import { NavBarType } from "../types/types";

// Navigation Logo
export const LogoName: string = "CareFinder";

// Navigation Information
export const NavBarData: NavBarType[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "About",
  },
  {
    id: 3,
    title: "Find Hospital",
    url: "find",
  },
  {
    id: 4,
    title: "Support",
    url: "Support",
  },
];

export default NavBarData;
