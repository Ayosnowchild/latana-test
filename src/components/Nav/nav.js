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
        <NavTabs title={"Overview"}>
          <OverviewSvg />
        </NavTabs>
        <div className="nav-tab-other">
          <div className="nav-special">
            <PropertySvg />
            <p className="nav-tab-text">Property</p>
          </div>
          <ArrUpSvg />
        </div>
        <NavTabs title={"Customer"}>
          <CustomerSvg />
        </NavTabs>
        <NavTabs title={"Payments"}>
          <PaymentsSvg />
        </NavTabs>
        <NavTabs title={"Investments"}>
          <InvestmentSvg />
        </NavTabs>
        <div className="nav-tab-other">
          <div className="nav-special">
            <ReviewSvg />
            <p className="nav-tab-text">Review</p>
          </div>
          <div className="rev-dig">10</div>
        </div>
      </div>
    </div>
  );
}

export function NavTabs({ children, title }) {
  return (
    <div className="nav-tab">
      <div>{children}</div>
      <p className="nav-tab-text">{title}</p>
    </div>
  );
}
