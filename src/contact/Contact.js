import "./Contact.css";
import iconMan from "../images/ic_man.png";
import iconWoman from "../images/ic_woman.png";

function Contact() {
  return (
    <div className="contact_container">
      <div className="contact_text1">신랑 신부에게 마음 전하기</div>
      <div className="contact_text2">축복의 의미로 축의금을 전달해보세요.</div>
      <div className="contract_button_container">
        <img className="contact_icon" src={iconMan} />
        &nbsp;신랑측 계좌번호
      </div>
      <div className="contract_button_container">
        <img className="contact_icon" src={iconWoman} />
        &nbsp;신부측 계좌번호
      </div>
    </div>
  );
}

export default Contact;
