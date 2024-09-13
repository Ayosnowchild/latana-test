import { ExitSvg, InvestmentSvg } from "../icons/logo";
import { NavTabs } from "./Nav/nav";
import "./Nav/nav.css";

export default function Foo() {
  return (
    <div className="foo-main">
      <NavTabs title={"Settings"}>
        <InvestmentSvg />
      </NavTabs>
      <div className="nav-acc">
        <div className="nav-acc-main">
          <img src="../../images/Avatar.png" alt="ava" className="nav-ava" />
          <div>
            <p className="nav-dark">Owolu Opeyemi</p>
            <p className="nav-ligh">admin@peaktower.com</p>
          </div>
          <ExitSvg />
        </div>
      </div>
    </div>
  );
}
