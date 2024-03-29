import "./BankAccountModal.css";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import Toast from "../toast/Toast";
import copyToClipboard from "./CopyToClipboard";

function GroomBankAccountModal({ onClose }) {
  const [ToastStatus, setToastStatus] = useState(false);
  const [ToastMsg, setToastMsg] = useState(""); // 토스트에 표시할 메세지

  const handleToast = (text) => {
    if (!ToastStatus) {
      setToastStatus(true);
      setToastMsg(text);
    }
  };

  useEffect(() => {
    if (ToastStatus) {
      setTimeout(() => {
        setToastStatus(false);
        setToastMsg("");
      }, 1000);
    }
  }, [ToastStatus]);

  const banckAccount1 = "0";
  const banckAccount2 = "0";
  const banckAccount3 = "0";

  return (
    <Modal onClose={onClose}>
      <h4>신랑측 계좌번호</h4>
      <div className="bank_account_info">
        감사합니다.
      </div>
      {/* <div className="bank_account_info">
        국민 {banckAccount1} 이창규
        <div
          className="bank_number_copy"
          onClick={() => {
            copyToClipboard(banckAccount1);
            handleToast("복사 되었습니다");
          }}
        >
          복사하기
        </div>
      </div>
      <div className="bank_account_info">
        국민 {banckAccount2} 유귀옥
        <div
          className="bank_number_copy"
          onClick={() => {
            copyToClipboard(banckAccount2);
            handleToast("복사 되었습니다");
          }}
        >
          복사하기
        </div>
      </div>
      <div className="bank_account_info">
        국민 {banckAccount3} 이종욱
        <div
          className="bank_number_copy"
          onClick={() => {
            copyToClipboard(banckAccount3);
            handleToast("복사 되었습니다");
          }}
        >
          복사하기
        </div>
      </div> */}
      {ToastStatus && (
        <>
          <Toast msg={ToastMsg} />
        </>
      )}
    </Modal>
  );
}

export default GroomBankAccountModal;
