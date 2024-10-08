import React, { useState } from "react";
import "./payments.css";
import Nav from "../../components/Nav/nav";
import {
  AddSvg,
  CheckSvg,
  ClockSvg,
  DownSvg,
  ExportSvg,
  FlagSvg,
  NextSvg,
  PrevSvg,
  SearchSvg,
  ViewSvg,
} from "../../icons/logo";
import Foo from "../../components/foo";
import TransactionModal from "../../components/modals/modal";
function Payments() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const transactions = [
    {
      id: 1,
      date: "May 1, 2023, 9:00 AM",
      transactionId: "7GJ17231HASD...1313",
      customer: "Owolu Opeyemi",
      amount: "800.00",
      status: "Success",
      bank: "Access bank",
      recipientAccountNumber: "09548765498",
      description: "Returns/ March 31/Bradford",
    },
    {
      id: 2,
      date: "May 1, 2023, 9:00 AM",
      transactionId: "7GJ17231HASD...1313",
      customer: "Victor Tosin",
      amount: "00.00",
      status: "Error",
      bank: "Access bank",
      recipientAccountNumber: "09548765498",
      description: "Returns/ March 31/Bradford",
    },
    {
      id: 3,
      date: "May 1, 2023, 9:00 AM",
      transactionId: "7GJ17231HASD...1313",
      customer: "Azeez Kiki",
      amount: "500,000.00",
      status: "Success",
      bank: "Access bank",
      recipientAccountNumber: "09548765498",
      description: "Returns/ March 31/Bradford",
    },
    {
      id: 4,
      date: "May 1, 2023, 9:00 AM",
      transactionId: "7GJ17231HASD...1313",
      customer: "Kiki Emmmnauel",
      amount: "2,500,000.00",
      status: "Success",
      bank: "Access bank",
      recipientAccountNumber: "09548765498",
      description: "Returns/ March 31/Bradford",
    },
    {
      id: 5,
      date: "May 1, 2023, 9:00 AM",
      transactionId: "7GJ17231HASD...1313",
      customer: "Victor Tosin",
      amount: "00.00",
      status: "Error",
      bank: "Access bank",
      recipientAccountNumber: "09548765498",
      description: "Returns/ March 31/Bradford",
    },
    {
      id: 6,
      date: "May 1, 2023, 9:00 AM",
      transactionId: "7GJ17231HASD...1313",
      customer: "Azeez Kiki",
      amount: "500,000.00",
      status: "Success",
      bank: "Access bank",
      recipientAccountNumber: "09548765498",
      description: "Returns/ March 31/Bradford",
    },
    {
      id: 7,
      date: "May 1, 2023, 9:00 AM",
      transactionId: "7GJ17231HASD...1313",
      customer: "Kiki Emmmnauel",
      amount: "2,500,000.00",
      status: "Success",
      bank: "Access bank",
      recipientAccountNumber: "09548765498",
      description: "Returns/ March 31/Bradford",
    },
    {
      id: 8,
      date: "May 1, 2023, 9:00 AM",
      transactionId: "7GJ17231HASD...1313",
      customer: "Victor Tosin",
      amount: "00.00",
      status: "Error",
      bank: "Access bank",
      recipientAccountNumber: "09548765498",
      description: "Returns/ March 31/Bradford",
    },
    {
      id: 9,
      date: "May 1, 2023, 9:00 AM",
      transactionId: "7GJ17231HASD...1313",
      customer: "Azeez Kiki",
      amount: "500,000.00",
      status: "Success",
      bank: "Access bank",
      recipientAccountNumber: "09548765498",
      description: "Returns/ March 31/Bradford",
    },
    {
      id: 10,
      date: "May 1, 2023, 9:00 AM",
      transactionId: "7GJ17231HASD...1313",
      customer: "Kiki Emmmnauel",
      amount: "2,500,000.00",
      status: "Success",
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
                  <th>Transaction ID</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
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
                        <span className={`status ${item.status.toLowerCase()}`}>
                          {item.status}
                        </span>
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
          pay={true}
          open={showModal}
          onClose={close}
          transaction={selectedTransaction}
        />
      )}
    </div>
  );
}

export default Payments;
