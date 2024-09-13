import React from "react";
import "./payments.css";
import Nav from "../../components/Nav/nav";
import {
  AddSvg,
  ClockSvg,
  DownSvg,
  ExportSvg,
  FlagSvg,
} from "../../icons/logo";
import Foo from "../../components/foo";
function Payments() {
  return (
    <div className="payment-main">
      <div className="nav-con">
        <Nav />
        <Foo />
      </div>
      <div className="main-sec">
        <div className="main-up">
          <div className="main-up-sub">
            <p className="main-up-ligh">Dashboard</p>
            <p className="main-up-dark">&gt; Payments</p>
          </div>
          <p className="main-up-big">Payments</p>
        </div>
        <div className="main-rem">
          <div className="main-rem-dash">
            <div className="main-rem-one">
              <p className="main-rem-heading">Transaction History</p>
              <div className="main-button-sec">
                <div className="main-button-sec-btn">
                  <AddSvg />
                  <p>Add Payment</p>
                </div>
                <div className="main-button-sec-btn">
                  <ExportSvg />
                  <p>Export</p>
                </div>
              </div>
            </div>
            <div className="main-sub-tab">
              <p className="main-sub-tab-text-ac">All payments</p>
              <p className="main-sub-tab-text-inac">Success</p>
              <p className="main-sub-tab-text-inac">Failed</p>
            </div>
            <div className="fil-box">
              <div className="fil-main">
                <div className="filter-sec">
                  <ClockSvg />
                  <p>Date range </p>
                  <DownSvg />
                </div>
                <div className="filter-sec">
                  <FlagSvg />
                  <p>Status</p>
                  <DownSvg />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
