import React from "react";
import "./modal.css";
import { ModalExSvg } from "../../icons/logo";

const TransactionModal = ({ open, onClose, transaction, pay }) => {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Transaction Details</h2>
          <button onClick={onClose} className="modal-close-button">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-body-row">
            <TxTab title={"Date Created:"} details={transaction.date} />
            <TxTab
              title={"Transaction ID:"}
              details={transaction.transactionId}
            />
            <TxTab title={"Customer:"} details={transaction.customer} />
          </div>
          <div className="modal-body-row">
            <TxTab title={"Amount Paid:"} details={transaction.amount} />
            <TxTab title={"Description:"} details={transaction.description} />
            {pay ? (
              <div className="modal-row">
                <strong>Payment Status:</strong>
                <span
                  className={
                    transaction.status === "Success"
                      ? "status-success"
                      : "status-failed"
                  }
                >
                  {transaction.status}
                </span>
              </div>
            ) : (
              <TxTab title={"Recipient Bank:"} details={transaction.status} />
            )}
          </div>
          <div className="modal-body-row">
            <TxTab title={"Recipient Bank:"} details={transaction.bank} />
            <TxTab
              title={"Recipient Account Number:"}
              details={transaction.recipientAccountNumber}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button className="export-button">
            <ModalExSvg />
            <p>Export as CSV</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;

function TxTab({ title, details }) {
  return (
    <div className="modal-div">
      <p className="modal-title">{title}</p>
      <p className="modal-details">{details}</p>
    </div>
  );
}
