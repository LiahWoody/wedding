import "./Contact.css";
import { useState } from "react";
import iconMan from "../images/ic_man.png";
import iconWoman from "../images/ic_woman.png";
import GroomBankAccountModal from "../modal/GroomBankAccountModal";
import BrideBankAccountModal from "../modal/BrideBankAccountModal";

function Contact() {
  const [isOpenGroom, openModalGroom] = useState(false);
  const [isOpenBride, openModalBride] = useState(false);
  const onClickGroom = () => {
    openModalGroom(true);
  };
  const onClickBride = () => {
    openModalBride(true);
  };

  return (
    <div className="contact_container">
      {isOpenGroom && (
        <GroomBankAccountModal
          open={isOpenGroom}
          onClose={() => {
            openModalGroom(false);
          }}
        />
      )}
      {isOpenBride && (
        <BrideBankAccountModal
          open={isOpenBride}
          onClose={() => {
            openModalBride(false);
          }}
        />
      )}
      <div className="contact_text1">신랑 신부에게 마음 전하기</div>
      <div className="contact_text2">축복의 의미로 축의금을 전달해보세요.</div>
      <div className="contract_button_container" onClick={onClickGroom}>
        <img className="contact_icon" src={iconMan} />
        &nbsp;신랑측 계좌번호
      </div>
      <div className="contract_button_container" onClick={onClickBride}>
        <img className="contact_icon" src={iconWoman} />
        &nbsp;신부측 계좌번호
      </div>
    </div>
  );
}

export default Contact;
