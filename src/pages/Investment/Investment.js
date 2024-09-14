import React, { useState } from "react";
import "./Investment.css";
import Nav from "../../components/Nav/nav";
import {
  CheckSvg,
  ClockSvg,
  DownarrSvg,
  DownSvg,
  ExportSvg,
  FlagSvg,
  NextSvg,
  PrevSvg,
  SearchSvg,
  UpSvg,
  ViewSvg,
  WallSvg,
} from "../../icons/logo";
import Foo from "../../components/foo";
import TransactionModal from "../../components/modals/modal";
function Investment() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const transactions = [
    {
      id: 1,
      date: "May 1, 2023, 9:00 AM",
      transactionId: "Bradford Apartment",
      customer: "Owolu Opeyemi",
      amount: "800.00",
      status: "Property Purchase",
      bank: "Access bank",
      recipientAccountNumber: "09548765498",
      description: "Returns/ March 31/Bradford",
    },
    {
      id: 2,
      date: "May 1, 2023, 9:00 AM",
      transactionId: "Fortune Apartment",
      customer: "Victor Tosin",
      amount: "00.00",
      status: "Property Purchase",
      bank: "Access bank",
      recipientAccountNumber: "09548765498",
      description: "Returns/ March 31/Bradford",
    },
  ];
  function open(transaction) {
    setSelectedTransaction(transaction);
    setShowModal(true);
  }

  function close() {
    setShowModal(false);
    setSelectedTransaction(null);
  }
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
            <p className="main-up-dark">&gt; Investments</p>
          </div>
          <p className="main-up-big">Investments</p>
        </div>
        <div className="main-rem">
          <div className="inves-dash">
            <InvestmentDashboardCard
              rate={"pos"}
              description={"N300,000,000.00"}
              title={"Total Property Purchase"}
              change={"20%"}
            />
            <InvestmentDashboardCard
              rate={"neg"}
              description={"N60,000,000.00"}
              title={"Total Co-Ownership"}
              change={"20%"}
            />
            <InvestmentDashboardCard
              rate={"neg"}
              description={"N60,000,000.00"}
              title={"Total Cash Investment"}
              change={"20%"}
            />
          </div>
          <div className="main-rem-dash">
            <div className="main-rem-one">
              <p className="main-rem-heading">Investment History</p>
              <div className="main-button-sec">
                <div className="main-button-sec-btn">
                  <ExportSvg />
                  <p>Export</p>
                </div>
              </div>
            </div>
            <div className="main-sub-tab">
              <p className="main-sub-tab-text-inac">All </p>
              <p className="main-sub-tab-text-inac">Co-Ownership</p>
              <p className="main-sub-tab-text-ac">Property Purchase</p>
              <p className="main-sub-tab-text-inac">Cash Investments</p>
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
              <div className="fil-search">
                <div className="search-con">
                  <SearchSvg />
                </div>
                <input
                  placeholder="Search by amount, payment method "
                  className="fil-inp"
                />
              </div>
            </div>
            <div className="payment-table">
              <table>
                <tr className="table-head">
                  <th>
                    <CheckSvg />
                  </th>
                  <th>Date Created</th>
                  <th>Property Invested</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Investment Type</th>
                  <th>Actions</th>
                </tr>
                {transactions.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <CheckSvg />
                      </td>
                      <td>{item.date}</td>
                      <td>{item.transactionId}</td>
                      <td>{item.customer}</td>
                      <td>{item.amount}</td>
                      <td>
                        <span className="purchase">{item.status}</span>
                      </td>
                      <td>
                        <span className="ac-icons">
                          <ViewSvg />
                          <div onClick={() => open(item)}>
                            <ExportSvg />
                          </div>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </table>
              <div className="pagination">
                <button className="prev-btn">
                  <PrevSvg />
                  <p>Previous</p>
                </button>
                <div className="pag-fig">
                  <span className="span-spec">1</span>
                  <span className="span">2</span>
                  <span className="span">3</span>
                  <span className="span">...</span>
                  <span className="span">8</span>
                  <span className="span">9</span>
                  <span className="span">10</span>
                </div>
                <button className="next-btn">
                  <p>Next</p>
                  <NextSvg />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedTransaction && (
        <TransactionModal
          open={showModal}
          onClose={close}
          transaction={selectedTransaction}
        />
      )}
    </div>
  );
}

export default Investment;

function InvestmentDashboardCard({ title, description, change, rate }) {
  return (
    <div className="inv-card-con">
      <div className="card-one">
        <p className="card-sm">{title}</p>
        <p className="card-bg">{description}</p>
      </div>
      <div className="card-ra">
        <span className={rate === "pos" ? "pos" : "neg"}>
          <div>{rate === "pos" ? <UpSvg /> : <DownarrSvg />}</div>
          <p>{change}</p>
        </span>
        <div className="in-svg">
          <WallSvg />
        </div>
      </div>
    </div>
  );
}
