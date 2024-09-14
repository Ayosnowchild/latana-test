import { NavLink } from "react-router-dom";
import {
  ArrUpSvg,
  CustomerSvg,
  InvestmentSvg,
  LogoSvg,
  OverviewSvg,
  PaymentsSvg,
  PropertySvg,
  ReviewSvg,
} from "../../icons/logo";
import "./nav.css";

export default function Nav() {
  return (
    <div className="nav-main">
      <LogoSvg />
      <div className="nav-main-grp">
        <NavLink
          to={"/overview"}
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          <NavTabs title={"Overview"}>
            <OverviewSvg />
          </NavTabs>
        </NavLink>
        <NavLink
          to={"/prop"}
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          <div className="nav-tab-other">
            <div className="nav-special">
              <PropertySvg />
              <p className="nav-tab-text">Property</p>
            </div>
            <ArrUpSvg />
          </div>
        </NavLink>
        <NavLink
          to={"cus"}
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          <NavTabs title={"Customer"}>
            <CustomerSvg />
          </NavTabs>
        </NavLink>

        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          <NavTabs title={"Payments"} more={true}>
            <PaymentsSvg />
          </NavTabs>
        </NavLink>
        <NavLink
          to={"/investments"}
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          <NavTabs title={"Investments"}>
            <InvestmentSvg />
          </NavTabs>
        </NavLink>
        <NavLink
          to={"rev"}
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          <div className="nav-tab-other">
            <div className="nav-special">
              <ReviewSvg />
              <p className="nav-tab-text">Review</p>
            </div>
            <div className="rev-dig">10</div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export function NavTabs({ children, title, more }) {
  return (
    <div className={more ? "nav-tab-ac" : "nav-tab"}>
      <div>{children}</div>
      <p className="nav-tab-text">{title}</p>
    </div>
  );
}
